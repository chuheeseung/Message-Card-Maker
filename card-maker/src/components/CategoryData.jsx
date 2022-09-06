import React, { useState } from 'react';

function CategoryData() {
	const [category, setCategory] = useState('');

	return (
		<div>
			{category === 'Background' && <div>배경</div>}
			{category === 'Bible' && <div>성경 구절</div>}
			{category === 'Font' && <div>폰트</div>}
		</div>
	);
}

export default CategoryData;
