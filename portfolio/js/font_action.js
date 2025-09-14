window.addEventListener("DOMContentLoaded", () => {    
    const el_pc = document.querySelectorAll(".char_action_pc");
    const el_sp = document.querySelectorAll(".char_action_sp");
    const width = window.innerWidth;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    if (width < 750) {
        for (let i = 0; i < el_sp.length; i++) {
            const originalChar = el_sp[i].dataset.original;
    
            let interval = setInterval(() => {
            // ランダムな文字に置き換える
            const randomChar = chars[Math.floor(Math.random() * chars.length)];
            el_sp[i].textContent = randomChar;
            }, 20); // 50msごとに入れ替え（高速）
        
            setTimeout(() => {
            clearInterval(interval);
            el_sp[i].textContent = originalChar; // 元の文字に戻す
            // el_sp[i].style.color = "#fff"; // 最終的に色を変化させるなどの演出も可能
            }, 1800 + i * 50); // 3秒後に確定
        }
    } else {
        for (let i = 0; i < el_pc.length; i++) {
            const originalChar = el_pc[i].dataset.original;
    
            let interval = setInterval(() => {
            // ランダムな文字に置き換える
            const randomChar = chars[Math.floor(Math.random() * chars.length)];
            el_pc[i].textContent = randomChar;
            }, 20); // 50msごとに入れ替え（高速）
        
            setTimeout(() => {
            clearInterval(interval);
            el_pc[i].textContent = originalChar; // 元の文字に戻す
            // el_pc[i].style.color = "#fff"; // 最終的に色を変化させるなどの演出も可能
            }, 1800 + i * 50); // 3秒後に確定
        }
    }

    setTimeout(function() {
        document.getElementById('txt_title_sub').classList.add('fade_in');
    }, 3600); // 3000ミリ秒 = 3秒

    setTimeout(function() {
        document.getElementById('txt_title_link').classList.add('fade_in');
    }, 5000);
});
