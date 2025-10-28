const insert = document.getElementById('insert');

insert.innerHTML = `
     <div class='color'>
        <table id='keyData'>
           <tr>
             <th>Key</th>
             <th>KeyCode</th>
             <th>Code</th>
            </tr>
        </table>
        </div>
    `;

const keyTable = document.getElementById('keyData');

window.addEventListener('keydown', function (e) {
    const row = document.createElement('tr')
    row.innerHTML = `
    <td>${e.key == ' ' ? 'Space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
    `;
    keyData.appendChild(row);
})
