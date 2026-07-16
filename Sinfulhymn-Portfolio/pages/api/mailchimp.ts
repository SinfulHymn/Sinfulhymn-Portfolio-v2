import mailchimp from '@mailchimp/mailchimp_marketing'
import type { NextApiRequest, NextApiResponse } from 'next'

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER, // E.g. us1
})

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body

  if (!email) {
    return res.status(400).json({ error: 'Email is required' })
  }

  try {
    const test = await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID as string, {
      email_address: email,
      status: 'subscribed',
    })
    return res.status(201).json({ error: '' })
  } catch (error) {
    return res.status(500).json({ error: (error as Error).message || (error as Error).toString() })
  }
}
