import React from 'react'

const MenuCard = ({ menuData }) => {
    // console.log(menuData);

    return (
        <>
            <section className="main-card--cointainer">
                {
                    menuData.map((curEle) => {
                        // console.log(curEle.id)
                        const {id,image,description,name,category} = curEle;
                        return (
                            <>
                                <div className='card-container' key = {id}>
                                    <div className="card">
                                        <div className="card-body">
                                            <span className="card-number card-circle subtle"> {id}  </span>
                                            <span className="card-author subtle">{category}</span>
                                            <h2 className="card-title">{name}</h2>
                                            <span className="card-description subtle">
                                                {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                                Minima fugiat temporibus iste quos, velit corrupti. 
                                                Quasi minus sunt sapiente, dolores provident ullam 
                                                excepturi neque amet! */}
                                                {description}
                                            </span>
                                            <div className="card-read">Read</div>
                                        </div>
                                        <img src= {image} alt="images" className ="card-media" />
                                        <span className="card-tag subtle">Order Now</span>
                                    </div>
                                </div>
                            </>
                        );
                    })
                }
            </section>
        </>
    );
};

export default MenuCard
