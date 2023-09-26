import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../utils/ItemTypes';
import styled from 'styled-components';

const Container = styled.div<{ isOver: boolean }>`
  width: 300px;
  height: 300px;
  border: 2px dashed gray;
  background-color: ${(props: { isOver: boolean }) =>
        props.isOver ? 'lightgreen' : 'white'};
`;

interface DroppableContainerProps {
    onDrop: (item: { id: string; text: string }) => void;
}

const DroppableContainer: React.FC<DroppableContainerProps> = ({ onDrop }) => {
    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.BOX,
        drop: (item: any) => {
            onDrop(item);
        },
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    });

    return (
        <Container ref={drop} isOver={isOver}>
            Drop here
        </Container>
    );
};

export default DroppableContainer;
