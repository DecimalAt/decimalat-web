import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../utils/ItemTypes';
import styled from 'styled-components';

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: lightblue;
  cursor: move;
`;

interface DraggableBoxProps {
    id: string;
    text: string;
}

const DraggableBox: React.FC<DraggableBoxProps> = ({ id, text }) => {
    const [, ref] = useDrag({
        type: ItemTypes.BOX,
        item: { id, text },
    });

    return <Box ref={ref}>{text}</Box>;
};

export default DraggableBox;
