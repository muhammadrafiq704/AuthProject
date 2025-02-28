import React from 'react'
import Table from '../../components/Table/Table'
import { tenantRows } from './data/TenantRows'
import { tenantColumns } from './data/TenantColumns'

const LandlordAccounts:React.FC = () => {
  return (
    <div>
      <Table rows={tenantRows} columns={tenantColumns}/>
    </div>
  )
}

export default LandlordAccounts