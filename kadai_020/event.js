const Btn = document.getElementById('btn');

Btn.addEventListener('click', () => {
    document.querySelector('#text').textContent = 'ボタンが押されました';
});