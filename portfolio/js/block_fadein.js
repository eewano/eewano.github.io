document.addEventListener('DOMContentLoaded', () => {
    // 監視対象となる要素を全て取得
    const targets = document.querySelectorAll('.scroll_target');

    // Intersection Observerの設定
    const options = {
        root: null, // ビューポートをルートとして設定
        rootMargin: '0px',
        threshold: 0.3 // 要素の30%が見えたら発火
    };

    // Intersection Observerのインスタンスを作成
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // 要素が画面内に入ったか判定
            if (entry.isIntersecting) {
                // 時間差を設けるために、インデックスを取得
                const delay = Array.from(targets).indexOf(entry.target) * 200; // 200msずつ遅延

                // 少し遅延させてクラスを追加
                setTimeout(() => {
                    entry.target.classList.add('is_visible');
                }, delay);

                // 一度表示されたら監視を終了
                observer.unobserve(entry.target);
            }
        });
    }, options);

    // 各要素を監視
    targets.forEach(target => {
        observer.observe(target);
    });
});
