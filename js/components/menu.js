export const menuListCategoryIndex = (res)=>{
    let {data} = res;
    plantilla = "";
    data.forEach((value, index) =>{
        plantilla += /*html*/`
        <li title="${value.name}">
            <a href="#">
                <img src="storage/img/category.svg">
                <span>${value.name}</span>
            </a>
        </li>`;
    });
    return plantilla;
}