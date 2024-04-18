import { FC } from 'react';

type Props = {
    isVisable: boolean;
}

const Model: FC<Props> = (props) => {
    const { isVisable } = props;

    const modelJsx =(
        <div className='fixed place-content-center top-0 left-0 z-50 w-screen h-screen p-4 bg-[rgba(0,0,0,0,0.80)]'/>
    );

    return isVisable ? modelJsx : <></>;
};

export default Model;