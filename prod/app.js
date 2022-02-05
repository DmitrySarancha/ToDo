const input = document.querySelector('.input input');
const btn = document.querySelector('.input button');
const output = document.querySelector('.output');

btn.addEventListener('click', () => {
    let task = input.value;
    if (!task) {
        alert('Add new message, please!');
        return;
    }

    const div = document.createElement('div');
    div.classList.add('output_inner');

    const div_input = document.createElement('input');
    div_input.type = 'text';
    div_input.value = task;
    div_input.setAttribute('readonly', 'readonly');
    div.appendChild(div_input);

    const div_btn = document.createElement('button');
    const btn_icon = document.createElement('i');

    btn_icon.classList.add('far', 'fa-trash-alt');

    div_btn.appendChild(btn_icon);

    div.appendChild(div_btn);

    output.appendChild(div);

    div_btn.addEventListener('click', () => {
        output.removeChild(div);
    });
});
