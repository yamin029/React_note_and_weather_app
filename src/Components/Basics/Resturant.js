import React, { useState } from 'react'
import "./style.css"
import Menu from './MenuApi'
import MenuCard from './MenuCard'
import Navbar from './Navbar'

const uniqueList = [
    ...new Set(
        Menu.map((curEle) => {
            return curEle.category;
        })
    ),"All"
]
console.log(uniqueList);

const Resturant = () => {
    const [menuData, setMenuData] = useState(Menu);
    // eslint-disable-next-line
    const [menuList, setMenuList] = useState(uniqueList);
    const filterItem = (catergory) => {
        if(catergory === "All"){
            setMenuData(Menu);
            return;
        }
        const updatedList = Menu.filter((curEle) => {
            // console.log(curEle.category === catergory);
            return curEle.category === catergory;
        });
        // uniqueList.map((curEle)=>{console.log(curEle)});
        setMenuData(updatedList);
    }
    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList}></Navbar>
            <MenuCard menuData={menuData}></MenuCard>
        </>
    )
}

export default Resturant;
