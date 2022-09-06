import React from 'react';
import style from './Image.module.css';

function Image() {
	return (
		<div className={style.imageWrap}>
			<img className={style.bgImage} src="" alt="" />
			<div className={style.message}>이미지 메시지</div>
			<div className={style.bible}>성경 구절</div>
		</div>
	);
}

export default Image;
