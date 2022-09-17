import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const ImageData = atom({
	key: 'image',
	default: 0,
	effects_UNSTABLE: [persistAtom],
});

export const BibleData = atom({
	key: 'bible',
	default: '',
	effects_UNSTABLE: [persistAtom],
});
