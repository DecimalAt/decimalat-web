import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../utils/ItemTypes';
import styled from 'styled-components';

const Box = styled.div`
  cursor: move;
  width: auto;
  height: 80px;
  background-color: #FFF;
  cursor: move;
  margin: 0px;
  border: 1px solid rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #F5F7FC;
  }
`;

interface DraggableBoxProps {
    id: string;
    text: string;
    type: string;
    config?: any;
    children: React.ReactNode;
    helpHeaderText: string;
    onHelpClick: (helpHeaderText: string) => void;
}

const DraggableBox: React.FC<DraggableBoxProps> = ({ id, text, type, config, children, helpHeaderText, onHelpClick }) => {
    const [, ref] = useDrag({
        type: ItemTypes.BOX,
        item: { id, text, type, config },
    });

    const handleOnClick = () => {
      onHelpClick(helpHeaderText);
    }

    return <Box ref={ref} onClick={handleOnClick}>{children}</Box>;
};

export default DraggableBox;
