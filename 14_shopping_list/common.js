//1. add버튼 클릭 event 만들기
// - input value 가져오고 엘리먼트 요소 생성하기
//2. 삭제버튼 만들기

const items = document.querySelector('.items');
const inputItem = document.querySelector('.footer_input');
const addBtn = document.querySelector('.footer_button');

const add = () => {
    const text = inputItem.value;
    if(text.length === 0){
        alert("리스트 입력");
    }else{
        const item = createList(text);
        items.appendChild(item);
        item.scrollIntoView({block:'end'});
        inputItem.value = '';
        inputItem.focus();
    }
};

const createList = (item) => {
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item_row');

    const itemDiv = document.createElement('div');
    itemDiv.setAttribute('class', 'item');

    const itemName = document.createElement('span');
    itemName.setAttribute('class','item_name');
    itemName.innerText = item;

    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class','item_delete');

    itemRow.appendChild(itemDiv);
    itemDiv.appendChild(itemName);
    itemDiv.appendChild(deleteBtn);
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';

    deleteBtn.addEventListener("click", () => {
        items.removeChild(itemRow);
    });
    return itemRow;

};


addBtn.addEventListener('click', (e) => {
    add();
});

document.addEventListener('keydown', (e) => {
    if(e.keyCode === 13){
        add();
    };
});