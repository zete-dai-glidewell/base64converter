'use client'

import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { stringToBase64 } from "@/lib/client-utils";


export function Base64Encoder() {
  const [originalString, setOriginalString] = useState<string | undefined>(undefined)
  const [base64String, setBase64String] = useState<string | undefined>(undefined)

  return (
    <div className="grid w-full gap-10">
      <div className="grid w-full gap-5">
        <Label htmlFor="base64-input-string">Original String</Label>
        <Textarea rows={10} placeholder="Type the string to be Base64-Encoded." id="base64-input-string"
          onChange={(e) => setOriginalString(e.target.value)}
          value={originalString}
        />
        <Button onClick={(e) => setBase64String(stringToBase64(originalString!))}
        >Base64 Encode</Button>
      </div>
      <div className="grid w-full gap-5">
        <Label htmlFor="base64-output-string">Base64-Encoded string</Label>
        <Textarea rows={10} placeholder="Your Base64-Encoded string will be shown here." id="base64-output-string"
          value={base64String}
        />
      </div>
    </div>
  )
}