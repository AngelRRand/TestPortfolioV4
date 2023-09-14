// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}


/* 

const saveSvg = async () => {
    try {
      await fetch('http://localhost:3000/api/svg', {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          color: color,
          color2: color2
        })
      }).then((res) => res.json())
    } catch (error) {
      console.log(error)
    }
  }

  
*/