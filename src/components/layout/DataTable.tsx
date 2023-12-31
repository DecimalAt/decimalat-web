import * as React from 'react'
import styled from 'styled-components'

interface DataTableProps {
    columns: string[]
    widths?: string[]
    children: any
}

const DataTable: React.FC<DataTableProps> = ({ children, widths, columns }) => (
    <Wrapper>
        <thead>
            <tr>
                {columns.map((column, i) => (
                    <th key={column} style={widths && widths[i] ? { width: widths[i] } : undefined}>
                        {column}
                    </th>
                ))}
            </tr>
        </thead>
        <tbody>{children}</tbody>
    </Wrapper>
)

export default DataTable

const Wrapper = styled('table')`
  margin-bottom: 0;
  border-top: 1px solid ${props => props.theme.colors.borders};
  border-bottom: 1px solid ${props => props.theme.colors.borders};

  thead {
    tr {
      th {
        padding: 1rem;
        text-align: left;
        border-bottom: 2px solid ${props => props.theme.colors.borders};
        background: #F7F9FC;
        height: 40px;
        color: #2A3546;
        font-family: 'Poppins_600';
        font-size: 12px;
      }
    }
  }

  tbody {
    background-color: #FFF;
    border-bottom-right-radius: 0.5em;
    border-bottom-left-radius: 0.5em;
    tr {
      border-top: 1px solid ${props => props.theme.colors.borders};

      &:nth-child(even) {
        background: ${props => props.theme.colors.tableOdd};
      }

      td {
        padding: 0.5rem 1rem;
        font-size: 0.85rem;
      }
    }
  }
`