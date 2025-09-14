window.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById('overlay');
    const transitionOverlay = document.getElementById('page_transition');
    const fadeLinks = document.querySelectorAll('.fade_link');

    // 少し遅延させてからフェードアウト開始（好みで調整）
    setTimeout(() => {
        overlay.style.opacity = '0';
    }, 100); // 0.1秒後にフェード開始

    // フェードアウト後に要素を削除
    overlay.addEventListener('transitionend', function() {
        overlay.parentNode.removeChild(overlay);
    });

    fadeLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            // デフォルトのページ遷移をキャンセル
            event.preventDefault();
            
            const targetUrl = link.href;

            // オーバーレイにフェードアウト用のクラスを追加
            transitionOverlay.classList.add('is_fade_visible');

            // CSSのトランジションが完了するのを待ってからページを遷移
            transitionOverlay.addEventListener('transitionend', () => {
                window.location.href = targetUrl;
            }, { once: true }); // イベントリスナーを一度だけ実行
        });
    });

    // 戻るボタンで戻ってきた時のリセット処理
    window.addEventListener('pageshow', (event) => {
        // persistedプロパティがtrueなら、ブラウザのキャッシュから復元されたことを意味する
        if (event.persisted) {
            // オーバーレイのクラスを削除して非表示にする
            transitionOverlay.classList.remove('is_fade_visible');
        }
    });
});
