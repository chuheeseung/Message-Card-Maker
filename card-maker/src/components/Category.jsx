import React from 'react';
import style from './Category.module.css';

function Category() {
	return (
		<div className={style.categoryWrap}>
			<button>배경</button>
			<button>성경구절</button>
			<button>폰트</button>
		</div>
	);
}

export default Category;
