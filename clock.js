scroll_h = document.getElementsByClassName("scroll")[0];
scroll_m = document.getElementsByClassName("scroll")[1];
scroll_s = document.getElementsByClassName("scroll")[2];

function reset_clock() {
    scroll_h.scrollTo(0, 0);
    scroll_m.scrollTo(0, 0);
    scroll_s.scrollTo(0, 0);
}

setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();

    hrotate = 30 * htime + mtime / 2;
    mrotate = 6 * mtime;
    srotate = 6 * stime;

    height_h = scroll_h.scrollHeight - 200;
    height_m = scroll_m.scrollHeight - 200;
    height_s = scroll_s.scrollHeight - 200;

    scroll_h.onscroll = function () {
        var rotate = (360 / height_h) * scroll_h.scrollTop;
        hour.style.transform = `rotate(${rotate + hrotate}deg)`;
    }
    scroll_m.onscroll = function () {
        var rotate = (360 / height_m) * scroll_m.scrollTop;
        min.style.transform = `rotate(${rotate + mrotate}deg)`;
    }
    scroll_s.onscroll = function () {
        var rotate = (360 / height_s) * scroll_s.scrollTop;
        sec.style.transform = `rotate(${rotate + srotate}deg)`;
    }

    add_h = (360 / height_h) * scroll_h.scrollTop;
    add_m = (360 / height_m) * scroll_m.scrollTop;
    add_s = (360 / height_s) * scroll_s.scrollTop;

    hour.style.transform = `rotate(${add_h + hrotate}deg)`;
    min.style.transform = `rotate(${add_m + mrotate}deg)`;
    sec.style.transform = `rotate(${(add_s + srotate)}deg)`;

    function digitalTime() {
        digital_h = Math.round(((add_h + hrotate) - (mtime / 2)) / 30);
        digital_m = Math.round((add_m + mrotate) / 6);
        digital_s = Math.round((add_s + srotate) / 6);
        if (digital_s > 60) {
            digital_s = digital_s - 60;
        }
        if (digital_m > 60) {
            digital_m = digital_m - 60;
        }
        if (digital_m < 10) {
            digital_m = "0" + digital_m;
        }
        if (digital_s < 10) {
            digital_s = "0" + digital_s;
        }
        if (digital_h < 10) {
            digital_h = "0" + digital_h;
        }
        if (digital_h > 12) {
            digital_h = digital_h - 12;
            if (digital_h > 12) {
                digital_h = digital_h - 12;
            }

            return (digital_h + ":" + digital_m + ":" + digital_s + ":PM");
        } else {

            return (digital_h + ":" + digital_m + ":" + digital_s + ":AM");
        }
    }

    digital.innerHTML = digitalTime();
}, 1000)