
import React from 'react'
import { DataTable } from './data-table'
import { columns, Payment } from './columns'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { PlusCircle } from 'lucide-react'

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ]
}

const InsumosTab = async () => {
  const data = await getData()
  return (
    <>
    <div className="flex justify-between py-3 pt-5">
        <div>
          <Label htmlFor="search" />

          <Input
            type="search"
            className="w-[300px]"
            id="search"
            placeholder="Buscar insumos"
          />
        </div>
        <Button>
          <PlusCircle />
        </Button>
      </div>
     <div className="container mx-auto">
      <DataTable columns={columns} data={data} />
    </div>
      
    </>
  )
}

export default InsumosTab
