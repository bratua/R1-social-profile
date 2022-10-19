import PropTypes from 'prop-types';
import { Table } from './TransactionHistory.styled';
import { TransactionTableHeader } from './TableHeader';
import { TransactionTableBody } from './TableBody';

export function TransactionHistory({ transactions }) {
  return (
    <Table>
      <TransactionTableHeader />
      <TransactionTableBody transactions={transactions} />
    </Table>
  );
}
