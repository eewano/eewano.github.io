document.addEventListener('DOMContentLoaded', () => {
    const progressBarFill = document.querySelector('.progress_fill');
    const progressText = document.querySelector('.progress_text');
  
    let currentProgress = 0;
    const totalTime = 2200; // 3秒 (ミリ秒)
    const updateInterval = 10; // 30ミリ秒ごとに更新
  
    // メーターのアニメーションを遅延させて開始
    setTimeout(() => {
        progressBarFill.style.width = '100%';
    }, 100); // わずかに遅延させる
  
    // 数字を更新する関数
    const updateProgressNumber = () => {
        const interval = setInterval(() => {
            if (currentProgress >= 100) {
                clearInterval(interval);
                progressText.textContent = 'READY';
                progressBarFill.classList.add('wave_gradient');
                return;
            }
            
            // 経過時間に応じてパーセンテージを計算
            currentProgress += (100 / (totalTime / updateInterval));
            
            // 小数点以下を四捨五入して表示
            progressText.textContent = `${Math.round(currentProgress)}%`;
        }, updateInterval);
    };
    
    updateProgressNumber();
});
