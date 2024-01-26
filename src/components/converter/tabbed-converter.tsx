import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Base64Encoder } from "../base64/base64-encoder"
import { Base64Decoder } from "../base64/base64-decoder"

export function TabbedConverter() {
  return (
    <Tabs defaultValue="encoder" className="w-[800px] flex flex-col justify-evenly gap-7">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="encoder">Base64 Encoder</TabsTrigger>
        <TabsTrigger value="decoder">Base64 Decoder</TabsTrigger>
      </TabsList>
      <TabsContent value="encoder">
        <Base64Encoder></Base64Encoder>
      </TabsContent>
      <TabsContent value="decoder">
        <Base64Decoder></Base64Decoder>
      </TabsContent>
    </Tabs>
  )
}