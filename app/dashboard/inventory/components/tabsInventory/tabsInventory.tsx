import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductTab from "./productTab/productTab";
import InsumosTab from "./insumosTab/insumoTab";
import FormTab from "./formTabs/formTab";



export function TabsInventory() {
  return (
    <Tabs defaultValue="productos" className="w-full">
      {/* Lista de tabs */}
      <TabsList className="grid w-full grid-cols-3 gap-2">
        <TabsTrigger value="productos" className="text-center">
          Productos
        </TabsTrigger>
        <TabsTrigger value="insumos" className="text-center">
          Insumos
        </TabsTrigger>
        <TabsTrigger value="produccion" className="text-center">
          Producción
        </TabsTrigger>
      </TabsList>
      

      {/* Contenido de los tabs */}
      <div className="w-full">
        <TabsContent value="productos" className="w-full">
          <ProductTab />
        </TabsContent>
        <TabsContent value="insumos" className="w-full">
          <InsumosTab />
        </TabsContent>
        <TabsContent value="produccion" className="w-full">
          <FormTab />
        </TabsContent>
      </div>
    </Tabs>
  );
}
