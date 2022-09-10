import React from 'react'

function Menu ({menu}) {
return <section className='menu-container'>
    {
        menu.map(({id, title, category, price, img, desc})=> {
            return <div className="content" key={id}>
                 <img src={img} alt={title} />
                 <div className='write-up'>
                    <div className="heading">
                        <h4>{title}</h4>
                        <p>{price}</p>
                    </div>
                    <p>{desc}</p>
                 </div>
            </div>
        })
    }
</section>
}

export default Menu