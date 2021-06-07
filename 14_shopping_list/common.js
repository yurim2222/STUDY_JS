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
    let id = 0;
    const itemRow = document.createElement('li');
    itemRow.setAttribute('class', 'item_row');
    itemRow.setAttribute('data-id', id)
    itemRow.innerHTML = `
            <div class="item">
                <span class="item_name">${item}</span>
                <button class="item_delete">                            
                    <i class="fas fa-trash-alt" data-id=${id}></i>
                </button>
            </div>
    `;
    id++;
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

items.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    console.log(id);
    if(id){
       const toBeDeleted = document.querySelector(`.item_row[data-id='${id}']`);
       items.removeChild(toBeDeleted);
    }
})