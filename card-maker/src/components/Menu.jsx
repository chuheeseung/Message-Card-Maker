import React from 'react';
import Category from './Category';
import CategoryData from './CategoryData';
import style from './Menu.module.css';

function Menu() {
	return (
		<div className={style.menuWrap}>
			<Category />
			<CategoryData />
		</div>
	);
}

export default Menu;
