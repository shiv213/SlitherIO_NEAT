// ==UserScript==
// @name         slither debug
// @version      0.1
// @description  install with Tampermonkey (https://tampermonkey.net/)
// @author       by ynx0, shiv213. original by john.koepi / sitano, stacs
// @match        http://slither.io
// @grant        none
// ==/UserScript==

/*jshint esnext: true */

const Vector2 = (function () {
    const Vector2 = function (x, y) {
        this.x = x;
        this.y = y;
    };

    Vector2.prototype.magnitude = function () {
        return Math.hypot(this.x, this.y);
    };

    Vector2.prototype.norm = function () {
        const mag = this.magnitude();
        return new Vector2(this.x / mag, this.y / mag);
    };

    Vector2.prototype.scalarMul = function (scalar) {
        return new Vector2(scalar * this.x, scalar * this.y);
    };

    Vector2.prototype.add = function (otherVec) {
        return new Vector2(this.x + otherVec.x, this.y + otherVec.y);
    };

    Vector2.prototype.sub = function (otherVec) {
        return new Vector2(this.x - otherVec.x, this.y - otherVec.y);
    };

    Vector2.prototype.toString = function () {
        return "(" + this.x + ", " + this.y + ")";
    };

    Vector2.prototype.angle = function () {
        let ang = Math.atan2(this.y, this.x);
        if (ang < 0) {
            ang += Math.PI * 2;
        }
        return ang;
    };

    Vector2.prototype.gameDirection = function () {
        return (125 / Math.PI) * this.angle();
    };

    return Vector2;
})();

if (!String.prototype.format) {
    String.prototype.format = function () {
        const args = arguments;
        return this.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined' ? args[number] : match
                ;
        });
    };
}

if (!String.prototype.padStart) {
    String.prototype.padStart = function (targetLength) {
        return " ".repeat(Math.max(0, targetLength - this.length)) + this;
    };
}

if (!String.prototype.padStartHTML) {
    String.prototype.padStartHTML = function (targetLength) {
        return "&nbsp;".repeat(Math.max(0, targetLength - this.length)) + this;
    };
}

if (!Number.prototype.padStart) {
    Number.prototype.padStart = function (targetLength) {
        const s = this.toString();
        return " ".repeat(Math.max(0, targetLength - s.length)) + s;
    };
}

if (!Number.prototype.padStartHTML) {
    Number.prototype.padStartHTML = function (targetLength) {
        const s = this.toString();
        return "&nbsp;".repeat(Math.max(0, targetLength - s.length)) + s;
    };
}

function appendDiv(id, className, style) {
    const div = document.createElement("div");
    if (id) {
        div.id = id;
    }
    if (className) {
        div.className = className;
    }
    if (style) {
        div.style = style;
    }
    return document.body.appendChild(div);
}

(function () {
    'use strict';

    // CONSTANTS
    const fov = 124; // Food gathering field of view (0-250)

    // STATE
    let snakeDirV = new Vector2(0, 0);
    let snakePosV = new Vector2(0, 0);

    let enabled = false;
    let draw = true;
    let log = false;
    let filter = false;

    // noinspection JSMismatchedCollectionQueryUpdate
    let packetTime = [];
    let moveTime = [];
    const snakePos = [];
    // noinspection JSMismatchedCollectionQueryUpdate
    let snakeRot = [ /* dir = -1, ang = -1, wang = -1, sp = -1 */];
    const moveFreq = [];
    const rotFreq = [];
    let debugData = {};

    let positionHUD = null;
    let ipHUD = null;
    let fpsHUD = null;
    let debugHUD = null;
    const styleHUD = "color: #FFF; font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; font-size: 14px; position: fixed; opacity: 0.35; z-index: 7;";

    // UI STUFF
    let status = "STARTING...";

    const zoom = function (e) {
        if (!window.gsc) {
            return;
        }
        // noinspection JSUnresolvedVariable
        window.gsc *= Math.pow(0.9, e.wheelDelta / -120 || e.detail / 2 || 0);
    };

    const initMouseWheel = function () {
        if (/firefox/i.test(navigator.userAgent)) {
            document.addEventListener("DOMMouseScroll", zoom, false);
        } else {
            document.body.onmousewheel = zoom;
        }
    };

    document.addEventListener('keydown', function (e) {
        if (e.key === '0') {
            debugData = {};
        }

        if (e.key === 'a') {
            enabled = !enabled;
        }

        if (e.key === 'l') {
            log = !log;
        }

        if (e.key === 'f') {
            filter = !filter;
        }

        if (e.key === 'g') {
            draw = !draw;
        }

        if (e.key === 't') {
            if (!window.pfd) {
                window.pfd = document.createElement("div");
                pfd.style.position = "fixed";
                pfd.style.left = "4px";
                pfd.style.bottom = "69px";
                pfd.style.width = "400px";
                pfd.style.height = "100px";
                pfd.style.background = "rgba(0, 0, 0, .8)";
                pfd.style.color = "#80FF80";
                pfd.style.fontFamily = "Verdana";
                pfd.style.zIndex = "999999";
                pfd.style.fontSize = "11px";
                pfd.style.padding = "10px";
                pfd.style.borderRadius = "30px";
                pfd.textContent = "Testing HUD";
                document.body.appendChild(window.pfd);
            }

            window.testing = !window.testing;

            if (window.testing) {
                pfd.style.display = "block";
            } else {
                pfd.style.display = "none";
            }
        }

        if (e.key === 'c') {
            window.bso = {
                ip: "127.0.0.1",
                po: 8080
            };
            window.forcing = true;
            window.want_play = true;
        }
    }, false);

    const repaintInfoHud = function () {
        if (!ipHUD) {
            ipHUD = appendDiv("ip-hud", "nsi", styleHUD + "right: 30; bottom: 150px;");
        }
        if (!positionHUD) {
            positionHUD = appendDiv("position-hud", "nsi", styleHUD + "right: 30; bottom: 120px;");
        }
        if (!fpsHUD) {
            fpsHUD = appendDiv("fps-hud", "nsi", styleHUD + "right: 30; bottom: 170px;");
        }

        if (positionHUD) {
            // noinspection JSUnresolvedVariable
            positionHUD.textContent = "X: " + (~~window.view_xx || 0) + " Y: " + (~~window.view_yy || 0);
        }

        // noinspection JSUnresolvedVariable
        if (fpsHUD && window.fps && window.lrd_mtm) {
            if (Date.now() - window.lrd_mtm > 970) {
                fpsHUD.textContent = "FPS: " + window.fps;
            }
        }

        if (ipHUD && window.bso) {
            const currentIP = window.bso.ip + ":" + window.bso.po;
            ipHUD.textContent = "IP: " + currentIP;
        }
    };

    const repaintDebugHud = function () {
        let i;
        let dt = 0;
        let dv = 0;
        if (!debugHUD) {
            debugHUD = appendDiv("debug-hud", "nsi", styleHUD + "left: 30px; top: 150px;");
        }

        let html = "Debug by john.koepi / sitano, stacs";
        html += "<br/>-----------------------------------";
        html += "<br/>" + "Auto " + (enabled ? "on" : "off") + " - press 'a' to toggle (" + "status: " + status + ")";
        html += "<br/>" + "Log " + (log ? "on" : "off") + " - press 'l' to toggle, press 'f' to filter " + (filter ? "on" : "off");
        html += "<br/>" + "Testing " + (testing ? "on" : "off") + " - press 't' to toggle";
        html += "<br/>" + "Draw debug " + (draw ? "on" : "off") + " - press 'g' to toggle, press '0' to reset debug data";
        html += "<br/>" + "Connect to 127.0.0.1:8080 - press 'c'<br />";
        // noinspection JSUnresolvedVariable
        if (window.playing) {
            if (packetTime.length >= 3) {
                html += "<br/>" + "packet timing = " +
                    packetTime[0].padStartHTML(6) +
                    packetTime[1].padStartHTML(6) +
                    packetTime[2].padStartHTML(6);
            }
            html += "<br/>" + "move timing = " + moveTime;
            if (snakeRot.length >= 4) {
                html += "<br/>" + "rotation input = " +
                    "dir " + snakeRot[0].toFixed(2).padStartHTML(8) +
                    ", ang " + snakeRot[1].toFixed(2).padStartHTML(8) +
                    ", wang " + snakeRot[2].toFixed(2).padStartHTML(8) +
                    ", sp " + snakeRot[3].toFixed(2).padStartHTML(8);
            }
            // noinspection JSUnresolvedVariable
            html += "<br/>" + "rotation = " +
                "ang " + window.snake.ang.toFixed(2).padStartHTML(8) +
                ", wang " + window.snake.wang.toFixed(2).padStartHTML(8) +
                ", eang " + window.snake.eang.toFixed(2).padStartHTML(8) +
                ", ehang " + window.snake.ehang.toFixed(2).padStartHTML(8) +
                ", wehang " + window.snake.wehang.toFixed(2).padStartHTML(8) +
                ", sp " + window.snake.sp.toFixed(2).padStartHTML(8);
            // fam - 0..1 ratio to the next body increment
            // sct - live body parts count
            // noinspection JSUnresolvedVariable
            html += "<br/>" + "fam: {0}, sct: {1}".format(window.snake.fam.toFixed(2).padStartHTML(6), window.snake.sct);
            // noinspection JSUnresolvedVariable
            html += "<br/>" + "sp = {0}, tsp = {1}, fsp = {2}, sfr = {3}, msl = {4}".format(
                window.snake.sp.toFixed(2).padStartHTML(6),
                window.snake.tsp.toFixed(2).padStartHTML(6),
                window.snake.fsp.toFixed(2).padStartHTML(6),
                window.snake.sfr.toFixed(2).padStartHTML(6),
                window.snake.msl);
            // noinspection JSUnresolvedVariable
            html += "<br/>" + "fltg = {0}".format(window.snake.fltg);
            // noinspection JSUnresolvedVariable
            html += "<br/>" + "spang = {0}, sc = {1}, scang = {2}".format(
                window.snake.spang.toFixed(2).padStartHTML(6),
                window.snake.sc.toFixed(2).padStartHTML(6),
                window.snake.scang.toFixed(2).padStartHTML(6));
            // noinspection JSUnresolvedVariable
            html += "<br/>" + "chl = {0}".format(window.snake.chl.toFixed(2).padStartHTML(6));
            if (moveFreq) {
                for (i in moveFreq) {
                    dt += moveFreq[i][0];
                    dv += moveFreq[i][1];
                }
                dt /= moveFreq.length;
                dv /= moveFreq.length;
                html += "<br/>" + "mov_dt/avg = {0}ms, mov_dv/avg = {1}".format(
                    dt.toFixed(2).padStartHTML(6),
                    dv.toFixed(2).padStartHTML(6));
            }
            if (rotFreq) {
                let prev = 0, dv_count = 0, max = 0;
                for (i in rotFreq) {
                    if (!prev) {
                        prev = rotFreq[0];
                    } else {
                        dt += rotFreq[i][0] - prev[0];
                        dv += rotFreq[i][1];
                        if (rotFreq[i][1] !== 0) {
                            dv_count++;
                        }
                        if (rotFreq[i][1] > max) {
                            max = rotFreq[i][1];
                        }
                        prev = rotFreq[i];
                    }
                }
                dt /= rotFreq.length - 1;
                dv /= dv_count;
                html += "<br/>" + "rot_dt/avg = {0}ms, rot_dv/avg = {1}, max = {2}".format(
                    dt.toFixed(2).padStartHTML(6),
                    dv.toFixed(2).padStartHTML(6),
                    max.toFixed(2).padStartHTML(6));
            }
            // noinspection JSUnresolvedVariable
            html += "<br/>" + "etm = {0}".format(window.etm.toFixed(2).padStartHTML(6));
        }
        debugHUD.innerHTML = html;
    };

    const distToPlayer = function (food) {
        return Math.abs(food.rx - window.snake.xx) + Math.abs(food.ry - window.snake.yy);
    };

    // Returns a score of how desirable a piece of food is for the player
    const foodScore = function (food) {
        const foodSize = food.sz;

        return foodSize / distanceToFood(food);
    };

    const distanceToFood = function (food) {
        return snakePosV.sub(new Vector2(food.rx, food.ry)).magnitude();
    };

    const foodWithinFov = function (food) {
        const towardsFood = directionTowards(new Vector2(food.rx, food.ry));
        const snakeDir = snakeDirV.gameDirection();
        return (gameAngleDifference(towardsFood, snakeDir) < (fov / 2));
    };

    // Returns the piece of food the player will move towards
    // This is determined by calling "foodScore" on each piece of food
    const closestFood = function () {
        // noinspection JSUnresolvedVariable
        return window.foods.filter(function (food) {
            if (!food) return false;

            if (distanceToFood(food) > 60) {
                return true;
            } else {
                return foodWithinFov(food);
            }
        }).reduce(function (best, current) {
            // Find the piece of food with the best score
            if (!best) throw "No foods :(";
            if (!current) return best;
            return foodScore(best) > foodScore(current) ? best : current;
        }, {xx: 0, yy: 0, sz: 1});
    };

    const directionTowards = function (towardsPos) {
        return towardsPos.sub(snakePosV).gameDirection();
    };

    const gameAngleDifference = function (a, b) {
        const phi = Math.abs(b - a) % 250;
        return phi > 125 ? 250 - phi : phi;
    };

    // ----- INTERFACE -----
    function getCanvas() {
        return document.querySelector('canvas.nsi');
    }

    const setDirection = function (direction) {
        if (!enabled) {
            return;
        }

        if (direction >= 0 && direction <= 250) {
            const ang = 2 * direction * Math.PI / 256;
            const angV = new Vector2(Math.cos(ang), Math.sin(ang));
            window.xm = 100 * angV.x;
            window.ym = 100 * angV.y;
        } else {
            console.err("Invalid turn angle: " + direction);
        }
    };

    const enterSpeedMode = function () {
        sendPacket(253);
    };

    const exitSpeedMode = function () {
        sendPacket(254);
    };

    const sendPacket = function (val) {
        const packet = new Uint8Array(1);
        packet[0] = val;
        if (window.ws && window.ws.readyState === 1) {
            window.ws.send(packet);
        }
    };

    const getDrawPosition = function (vec) {
        // noinspection JSUnresolvedVariable
        return new Vector2(window.mww2 + (vec.x - window.view_xx) * gsc, window.mhh2 + (vec.y - window.view_yy) * gsc);
    };

    const drawLineOverlay = function (destination, thickness, colorString) {
        const canvas = getCanvas();

        const ctx = canvas.getContext("2d");
        ctx.strokeStyle = colorString;
        ctx.lineWidth = thickness;

        ctx.beginPath();
        const to = getDrawPosition(destination);
        ctx.moveTo(to.x, to.y);

        const from = getDrawPosition(snakePosV);
        ctx.lineTo(from.x, from.y);
        ctx.stroke();
    };

    const drawLineOverlay2 = function (from, to, thickness, colorString) {
        const canvas = getCanvas();

        const ctx = canvas.getContext("2d");
        ctx.strokeStyle = colorString;
        ctx.lineWidth = thickness;

        ctx.beginPath();
        from = getDrawPosition(from);
        ctx.moveTo(from.x, from.y);
        to = getDrawPosition(to);
        ctx.lineTo(to.x, to.y);
        ctx.stroke();
    };

    const drawPoint = function (at, thickness, colorString) {
        const canvas = getCanvas();


        const ctx = canvas.getContext("2d");
        ctx.strokeStyle = colorString;
        ctx.lineWidth = thickness;

        ctx.beginPath();
        at = getDrawPosition(at);
        ctx.rect(at.x, at.y, thickness, thickness);
        ctx.stroke();
    };

    const drawPoints = function (pts, thickness, colorString) {
        const canvas = getCanvas();

        const ctx = canvas.getContext("2d");
        ctx.strokeStyle = colorString;
        ctx.lineWidth = thickness;

        ctx.beginPath();
        for (let p in pts) {
            p = getDrawPosition(p);
            ctx.rect(p.x, p.y, thickness, thickness);
        }

        ctx.stroke();
    };

    const drawDebug = function (data) {
        let p;
        const canvas = getCanvas();
        const ctx = canvas.getContext("2d");
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#FFFFFF';

        for (let k in data) {
            const v = data[k];
            if (v.type === '.') {
                ctx.beginPath();
                ctx.strokeStyle = v.color;
                p = getDrawPosition(v.v);
                ctx.moveTo(p.x, p.y);
                ctx.rect(p.x, p.y, 1, 1);
                ctx.stroke();
            } else if (v.type === '_') {
                ctx.beginPath();
                ctx.strokeStyle = v.color;
                p = getDrawPosition(v.v);
                ctx.moveTo(p.x, p.y);
                p = getDrawPosition(v.w);
                ctx.lineTo(p.x, p.y);
                ctx.stroke();
            } else if (v.type === '#') {
                ctx.beginPath();
                ctx.strokeStyle = v.color;
                const p0 = getDrawPosition(v.v);
                const p1 = getDrawPosition(v.w);
                ctx.moveTo(p0.x, p0.y);
                ctx.rect(p0.x, p0.y, p1.x - p0.x, p1.y - p0.y);
                ctx.stroke();
            } else if (v.type === 'o') {
                ctx.beginPath();
                ctx.strokeStyle = v.color;
                p = getDrawPosition(v.v);
                ctx.moveTo(p.x, p.y);
                ctx.arc(p.x, p.y, v.r * gsc, 0, 2 * Math.PI, false);
                ctx.stroke();
            }
        }
    };

    const packetTypes = {
        a: "Initial setup",
        e: "Snake rotation ccw (?dir ang ?wang ?sp)",
        E: "Snake rotation ccw (dir wang ?sp)",
        3: "Snake rotation ccw (dir ang wang | sp)",
        4: "Snake rotation clockwise (dir wang ?sp)",
        5: "Snake rotation clockwise (dir ang wang)",
        h: "Update snake fam",
        r: "Remove snake part",
        g: "Move snake",
        G: "Move snake",
        n: "Increase snake",
        N: "Increase snake",
        l: "Leaderboard",
        v: "dead/disconnect packet",
        W: "Add Sector",
        w: "Remove Sector",
        m: "Global highscore",
        p: "Pong",
        u: "Update minimap",
        s: "Add/remove Snake",
        F: "Add Food",
        b: "Add Food",
        f: "Add Food",
        c: "Food eaten",
        j: "Update Prey",
        y: "Add/remove Prey",
        k: "Kill (unused in the game-code)",

        "0": "Reset debug",
        "!": "Draw debug",
    };

    const outPacketTypes = {
        115: "SetUsernameAndSkin",
        251: "Ping",
        252: "Key",
        108: "Rot left",
        114: "Rot right",
        253: "Fast",
        254: "Slow",
        255: "SetVictoryMessage"
    };

    const ssgOriginal = window.startShowGame;
    window.startShowGame = function () {
        ssgOriginal();

        const sendOriginal = window.ws.send;
        window.ws.send = function () {
            sendOriginal.apply(window.ws, arguments);
            if (log) {
                const data = new Uint8Array(arguments[0]);
                const len = data.length;
                const type = data[0];
                if (type <= 250 && len === 1) {
                    console.info("{0} << packet angle {1}".format(Date.now(), 2.0 * 3.14 * type / 250));
                } else {
                    let typeString = outPacketTypes[type];
                    if (!typeString) {
                        typeString = "" + type;
                    }
                    console.info("{0} << packet {1}, len {2}".format(Date.now(), typeString, len));
                }
            }
        };

        const onmessageOriginal = window.ws.onmessage;
        window.ws.onmessage = function (msg) {
            // snake id
            let snake;
            let snakeId;
            let color;
            let vy;
            const c = new Uint8Array(msg.data);
            let i = 3; // next byte

            /**
             * Reads a byte from the buffer
             * @returns {number} the value read from the buffer
             */
            function peekByte() {
                return c[i];
            }

            /**
             * Reads a byte from the buffer, automatically incrementing the cursor
             * @returns {number} the value read from the buffer
             */
            function readByte() {
                let byte = peekByte();
                i += 1;
                return byte;
            }

            /**
             * Reads a word from the buffer
             * @returns {number} the value read from the buffer
             */
            function peekWord() {
                return c[i] << 8 | c[i + 1];
            }

            /**
             * Reads a word from the buffer, automatically incrementing the cursor
             * @returns {number} the value read from the buffer
             */
            function readWord() {
                let word = peekWord();
                i += 2;
                return word;
            }

            /**
             * Reads three bytes from the buffer
             * @returns {number} the value read from the buffer
             */
            function peek3Bytes() {
                return c[i] << 16 | c[i + 1] << 8 | c[i + 2];
            }

            /**
             * Reads three bytes from the buffer, automatically incrementing the cursor
             * @returns {number} the value read from the buffer
             */
            function read3Bytes() {
                let triple = peek3Bytes();
                i += 3;
                return triple;
            }

            if (2 <= c.length) {
                // noinspection JSUnresolvedVariable
                const lptm = window.cptm; // last time
                const cptm = Date.now(); // current time

                const cltm = peekWord(); // time since last message from client
                let dtm = cptm - lptm; // delta time last message from server
                if (!lptm) {
                    dtm = 0;
                }
                // etm += Math.max(-180, Math.min(180, srvtm - cltm)); // [180; 180 + 180]

                packetTime = [dtm, cltm, Math.max(-180, Math.min(180, dtm - cltm))];

                let packetType = String.fromCharCode(c[2]); // packet type


                const playerSnakeId = window.snake ? window.snake.id : 0;
                let xx = 0, yy = 0;
                let vx;
                if ("g" === packetType || "n" === packetType || "G" === packetType || "N" === packetType) {
                    snakeId = readWord();
                    snake = window.os["s" + snakeId]; // snake

                    // noinspection JSUnresolvedVariable
                    if (3 <= window.protocol_version) {
                        if ("g" === packetType || "n" === packetType) {
                            xx = readWord()
                            yy = readWord()
                        } else {
                            const head = window.snake.pts[window.snake.pts.length - 1];

                            xx = head.xx + readByte() - 128;
                            yy = head.yy + readByte() - 128;
                        }
                    } else {
                        xx = read3Bytes() / 5;
                        yy = read3Bytes() / 5;
                    }

                    if (log && (!filter || playerSnakeId === snakeId)) {
                        console.info("{0} (srv {1}ms | cl {2}ms): packet {3}, snake s{4} [{5}]"
                            .format(cptm, dtm, cltm, packetType + "/" + packetTypes[packetType], snakeId, [xx, yy]));
                    }

                    if (snake === window.snake) {
                        snakePos.push(new Vector2(xx, yy));

                        if (moveTime.length < 2) {
                            moveTime = [Date.now(), 0, 0, 0];
                        } else {
                            const last = snakePos.length;

                            moveTime[1] = Date.now() - moveTime[0];
                            moveTime[0] = Date.now();

                            moveTime[2] = Math.round(snakePos[last - 2].sub(snakePos[last - 1]).magnitude()); // offset per step
                        }

                        moveFreq.push([moveTime[1], moveTime[2]]);
                        if (moveFreq.length > 20) {
                            moveFreq.shift();
                        }

                        if (snakePos.length > 20) {
                            snakePos.shift();
                        }
                        /*
                        var newSnakePosV = new Vector2(xx, yy);
                        snakeDirV = newSnakePosV.sub(snakePosV);

                        if (snake) {
                            var l = snakeDirV.scalarMul(10).magnitude();
                            //if (l > 200) {
                                var t = (etm / 8 * window.snake.sp / 4) * lag_mult;
                                console.log(snakeDirV.scalarMul(10).magnitude() + ", etm = " + etm, ", t = " + t);
                            //}
                        }*/
                    }
                } else if ("e" === packetType || "E" === packetType || "3" === packetType || "4" === packetType || "5" === packetType) {
                    const left = 1;
                    const right = 2;

                    let dir = -1, ang = -1, wang = -1, sp = -1;
                    const packetLen2 = c.length - 2;

                    snakeId = readWord() // snake id

                    // noinspection JSUnresolvedVariable
                    if (6 <= window.protocol_version) {
                        if (6 === packetLen2) {
                            // "e" - left, "4" - right
                            dir = "e" === packetType ? left : right;
                            ang = 2 * readByte() * Math.PI / 256;
                            wang = 2 * readByte() * Math.PI / 256;
                            sp = peekByte() / 18;
                        } else if (5 === packetLen2) {
                            switch (packetType) {
                                case "e":
                                    ang = 2 * readByte() * Math.PI / 256;
                                    sp = peekByte() / 18;
                                    break;
                                case "E":
                                    dir = left;
                                    wang = 2 * readByte() * Math.PI / 256;
                                    sp = peekByte() / 18;
                                    break;
                                case "4":
                                    dir = right;
                                    wang = 2 * readByte() * Math.PI / 256;
                                    sp = peekByte() / 18;
                                    break;
                                case "3":
                                    dir = left;
                                    ang = 2 * readByte() * Math.PI / 256;
                                    wang = 2 * peekByte() * Math.PI / 256;
                                    break;
                                case "5":
                                    dir = right;
                                    ang = 2 * readByte() * Math.PI / 256;
                                    wang = 2 * peekByte() * Math.PI / 256;
                                    break;
                            }
                        } else if (4 === packetLen2) {
                            switch (packetType) {
                                case "e":
                                    ang = 2 * peekByte() * Math.PI / 256;
                                    break;
                                case "E":
                                    dir = left;
                                    wang = 2 * peekByte() * Math.PI / 256;
                                    break;
                                case "4":
                                    dir = right;
                                    wang = 2 * peekByte() * Math.PI / 256;
                                    break;
                                case "3":
                                    sp = peekByte() / 18;
                                    break;
                            }
                        }
                    } else if (3 <= window.protocol_version) {
                        // N.B: This whole section used to have all instances of c[i + 1] as i[i + 1],
                        // which makes no sense, as i is a number acting as a cursor into the data array,
                        // so we cannot treat this as a normal array. i think it was a typo that meant c[c + 1]
                        // so i replaced it as such
                        // this seems to be handling old packets anyways, especially because it references a window.q which no longer exists
                        // so its not like it matters too much i dont think?



                        if ("3" !== packetType) {
                            if (8 === packetLen2 || (7 === packetLen2 || (6 === packetLen2 && "3" !== packetType || 5 === packetLen2 && "3" !== packetType))) {
                                dir = "e" === packetType ? 1 : 2;
                            }
                        }
                        if (8 === packetLen2 || (7 === packetLen2 || (5 === packetLen2 && "3" === packetType || 6 === packetLen2 && "3" === packetType))) {
                            ang = 2 * readWord() * Math.PI / 65535;
                        }
                        if (8 === packetLen2 || (7 === packetLen2 || (5 === packetLen2 && "3" !== packetType || 6 === packetLen2 && "3" !== packetType))) {
                            wang = 2 * readWord() * Math.PI / 65535;
                        }
                        if (8 === packetLen2 || (6 === packetLen2 || 4 === e)) {
                            sp = peekByte() / 18;
                        }
                    } else {
                        let q = window.q;

                        if (11 === q || (8 === q || (9 === q || 6 === q))) {
                            dir = readByte() - 48;
                        }
                        if (11 === q || (7 === q || (9 === q || 5 === q))) {
                            ang = 2 * read3Bytes() * Math.PI / 16777215;
                        }
                        if (11 === q || (8 === q || (9 === q || 6 === q))) {
                            wang = 2 * read3Bytes() * Math.PI / 16777215;
                        }
                        if (11 === q || (7 === q || (8 === q || 4 === q))) {
                            sp = peekWord() / 1E3;
                        }
                    }

                    snake = window.os["s" + snakeId]; // snake
                    let dAng = -1;
                    let spang = -1;
                    if (snake) {
                        if (-1 !== ang) {
                            // noinspection JSUnresolvedVariable
                            let pi2 = window.pi2
                            dAng = (ang - window.snake.ang) % pi2;
                            if (0 > dAng) {
                                dAng += pi2;
                            }
                            if (dAng > Math.PI) {
                                dAng -= pi2;
                            }
                        }
                        if (-1 !== sp) {
                            let {spangdv, snake} = window
                            spang = snake.sp / spangdv;
                            // noinspection JSUnresolvedVariable
                            if (1 < snake.spang) {
                                spang = 1;
                            }
                        }
                    }

                    if (log && (!filter || playerSnakeId === snakeId)) {
                        console.info("{0} (srv {1}ms | cl {2}ms): packet {3}, snake s{4} [dir = {5}, ang = {6}, wang = {7}, sp = {8}, dAng = {9}, spang = {10}]"
                            .format(cptm, dtm, cltm, packetType + "/" + packetTypes[packetType], snakeId, dir, ang, wang, sp, dAng, spang));
                    }

                    if (snake === window.snake) {
                        snakeRot = [dir, ang, wang, sp];

                        if (-1 !== ang) {
                            rotFreq.push([new Date(), Math.abs(ang - window.snake.ang)]);
                        } else {
                            rotFreq.push([new Date(), 0]);
                        }

                        if (rotFreq.length > 21) {
                            rotFreq.shift();
                        }
                    }
                } else if ("W" === packetType) {
                    xx = readByte();
                    yy = readByte();

                    if (log) {
                        console.info("{0} (srv {1}ms | cl {2}ms): packet {3}, [{4}]"
                            .format(cptm, dtm, cltm, packetType + "/" + packetTypes[packetType], [xx, yy]));
                    }
                } else if ("w" === packetType) {
                    // noinspection JSUnresolvedVariable
                    if (8 <= window.protocol_version) {
                        xx = readWord()
                        yy = readWord()
                    } else {
                        // f = c[i] ?? add if == 1
                        i += 1;
                        xx = readWord()
                        yy = readWord()
                    }

                    if (log) {
                        console.info("{0} (srv {1}ms | cl {2}ms): packet {3}, [{5}]"
                            .format(cptm, dtm, cltm, packetType + "/" + packetTypes[packetType], [xx, yy]));
                    }
                } else if ("0" === packetType) {
                    debugData = {};

                    if (log) {
                        console.info("{0} (srv {1}ms | cl {2}ms): packet {3}"
                            .format(cptm, dtm, cltm, packetType + "/" + packetTypes[packetType]));
                    }

                    return;
                } else if ("!" === packetType) {
                    let count = 0;
                    while (i < c.length) {
                        packetType = String.fromCharCode(readByte());
                        count++;
                        let id = read3Bytes();
                        if (packetType === '.') {
                            vx = readWord()
                            vy = readWord()
                            color = '#' + (read3Bytes()).toString(16);
                            if (id > 0) {
                                debugData[id] = {
                                    'type': packetType,
                                    'v': new Vector2(vx, vy),
                                    'color': color
                                };
                            }
                        } else if (packetType === '_' || packetType === '#') {
                            vx = readWord()
                            vy = readWord()
                            const wx = readWord()
                            const wy = readWord()
                            color = '#' + (read3Bytes()).toString(16);
                            if (id > 0) {
                                debugData[id] = {
                                    'type': packetType,
                                    'v': new Vector2(vx, vy),
                                    'w': new Vector2(wx, wy),
                                    'color': color,
                                };
                            }
                        } else if (packetType === 'o') {
                            vx = readWord()
                            vy = readWord()
                            const r = readWord()
                            color = '#' + (read3Bytes()).toString(16);
                            if (id > 0) {
                                debugData[id] = {
                                    'type': packetType,
                                    'v': new Vector2(vx, vy),
                                    'r': r,
                                    'color': color,
                                };
                            }
                        }
                    }

                    if (log) {
                        debugger;
                        console.info("{0} (srv {1}ms | cl {2}ms): packet {3}, count {4}"
                            .format(cptm, dtm, cltm, packetType + "/" + packetTypes["!"], count));
                    }

                    return;
                } else {
                    snakeId = readWord() // snake id
                    if (log && (!filter || playerSnakeId === snakeId || !snakeId)) {
                        if (!window.os[snakeId]) {
                            snakeId = 0;
                        }
                        if (snakeId) {
                            console.info("{0} (srv {1}ms | cl {2}ms): packet {3}, snake s{4}"
                                .format(cptm, dtm, cltm, packetType + "/" + packetTypes[packetType], snakeId));
                        } else {
                            console.info("{0} (srv {1}ms | cl {2}ms): packet {3}"
                                .format(cptm, dtm, cltm, packetType + "/" + packetTypes[packetType]));
                        }
                    }
                }
            }

            onmessageOriginal.apply(window.ws, [msg]);
        };
    };

    // ----- /INTERFACE -----
    const render = function () {
        let opponentSegmentPos;
        let pt;
        let point;
        let currentSnake;
        repaintInfoHud();
        repaintDebugHud();

        try {
            let snakeId;
            let sumVec = new Vector2(0, 0);
            const playerSnakeId = window.snake ? window.snake.id : 0;

            for (snakeId in window.os) {
                if (window.os.hasOwnProperty(snakeId)) {
                    if (snakeId !== "s" + playerSnakeId) {
                        // Opponent Snake
                        currentSnake = window.os[snakeId];

                        for (point in currentSnake.pts) {
                            pt = currentSnake.pts[point];
                            opponentSegmentPos = new Vector2(pt.xx, pt.yy);

                            const vecToOpponent = opponentSegmentPos.sub(snakePosV);
                            const opponentMagnitude = vecToOpponent.magnitude();

                            const normVec = vecToOpponent.norm();
                            const vectorInverse = normVec.scalarMul(3600 / (gsc * (Math.pow(opponentMagnitude, 2))));
                            sumVec = sumVec.add(vectorInverse);
                        }
                    }
                }
            }

            sumVec = sumVec.scalarMul(-1);
            const threshold = sumVec.magnitude();

            if (threshold > 1) {
                const avoidDirection = directionTowards(snakePosV.add(sumVec));
                status = "avoiding threat, threshold: " + threshold.toFixed(2);
                setDirection(avoidDirection);
                // drawLineOverlay(snakePosV.add(sumVec.norm().scalarMul(200)), threshold * 10, "#FF0000");
            } else {
                // noinspection JSUnresolvedVariable
                if (!window.foods.length) {
                    // noinspection JSUnresolvedVariable
                    setDirection(directionTowards(new Vector2(window.grd / 2, window.grd / 2)));
                    status = "returning to centre";
                } else {
                    const closest = closestFood();
                    status = "feeding, threshold: " + threshold.toFixed(2);
                    setDirection(directionTowards(new Vector2(closest.rx, closest.ry)));
                    // drawLineOverlay(new Vector2(closest.rx, closest.ry), 7, "#7FFF00");
                }
            }

            if (window.snake) {
                const newSnakePosV = new Vector2(window.snake.xx, window.snake.yy);
                snakeDirV = newSnakePosV.sub(snakePosV);
                snakePosV = newSnakePosV;
                window.draw = true;
                if (draw) {
                    // dSnake Position
                    drawLineOverlay(snakePosV.add(snakeDirV.scalarMul(10)), 1, "#D0FFD0");
                    drawPoints(snakePos, 2, "#FFFFFF");

                    for (snakeId in window.os) {
                        if (window.os.hasOwnProperty(snakeId)) {
                            if (snakeId === "s" + playerSnakeId) /*(snakeId != "s" + playerSnakeId)*/ {
                                // Opponent Snake
                                currentSnake = window.os[snakeId];
                                // ynx0 code:
                                // noinspection JSUnresolvedVariable
                                let les_pts = currentSnake.pts.filter((pt) => pt.eiu === 1)
                                for (point in currentSnake.pts) {
                                    pt = currentSnake.pts[point];
                                    opponentSegmentPos = new Vector2(pt.xx, pt.yy);
                                    drawPoint(opponentSegmentPos, 5, '#FFFFFF');
                                    //var vecToOpponent = opponentSegmentPos.sub(snakePosV);
                                    //var opponentMagnitude = vecToOpponent.magnitude();

                                    //var normVec = vecToOpponent.norm();
                                    //var vectorInverse = normVec.scalarMul(3600/(gsc * (Math.pow(opponentMagnitude, 2))));
                                    //sumVec = sumVec.add(vectorInverse);
                                }
                            }
                        }
                    }

                    /*
                    if (snake) {
                        var l = snakeDirV.scalarMul(10).magnitude();
                        if (l > 100) {
                            var t = (etm / 8 * window.snake.sp / 4) * lag_mult;
                            console.log(snakeDirV.scalarMul(10).magnitude() + ", etm = " + etm, ", t = " + t);
                        }
                    }*/

                    // drawLineOverlay(snakePosV.add(new Vector2(window.snake.fx, window.snake.fy)), 1, "#FF0000");

                    // Snake angles
                    if (snakeRot.length > 0) {
                        // ang = current snake angle
                        const ang = snakeRot[1];
                        if (ang !== -1) {
                            drawLineOverlay(newSnakePosV.add(new Vector2(Math.cos(ang), Math.sin(ang)).scalarMul(50)), 1, "#FF0000");
                        }
                        // wang = target angle
                        const wang = snakeRot[2];
                        if (wang !== -1) {
                            drawLineOverlay(newSnakePosV.add(new Vector2(Math.cos(wang), Math.sin(wang)).scalarMul(50)), 1, "#0000FF");
                        }
                    }

                    // Snake parts
                    for (let pi in window.snake.pts) {
                        const part = window.snake.pts[pi];
                        const pos = new Vector2(part.xx, part.yy);
                        // noinspection JSUnresolvedVariable
                        drawLineOverlay2(pos, pos.add(new Vector2(part.ebx, part.eby)), 1, "#F0F0FF");
                        drawLineOverlay2(pos, pos.add(new Vector2(part.fx, part.fy)), 1, "#FF0000");
                    }

                    // Debug
                    drawDebug(debugData);
                }
            }
        } catch (e) {
            console.log("Error caught: " + e);
        }

        // slither.io alias to requestAnimationFrame, maybe with custom logic?
        window.raf(render);
    };

    window.raf(render);

    initMouseWheel();
})();