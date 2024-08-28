const Btn = document.getElementById('btn');

const Txt = document.getElementById('text');

Btn.addEventListener('click', () => {
    Txt.textContent = 'ボタンが押されました';
});