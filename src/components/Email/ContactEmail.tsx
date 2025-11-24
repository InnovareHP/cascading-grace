import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface ContactSubmissionEmailProps {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactSubmissionEmail({
  name,
  email,
  phone,
  message,
}: ContactSubmissionEmailProps) {
  const previewText = `New contact form submission from ${name}`;

  return (
    <Html>
      <Head />
      <Body className="bg-gray-50 text-gray-900 font-sans">
        <Preview>{previewText}</Preview>

        <Container className="mx-auto py-10 px-6 w-[580px] max-w-full bg-white shadow-lg rounded-2xl">
          {/* Header */}
          <Section className="text-center mb-8">
            <Text className="text-2xl font-bold text-gray-900">
              New Contact Form Submission
            </Text>
            <Text className="text-gray-500 text-sm mt-1">
              Someone just reached out through the contact form on the website.
            </Text>
          </Section>

          <Hr className="border-gray-200 my-6" />

          {/* Details */}
          <Section className="space-y-4">
            <Text className="text-lg leading-relaxed text-gray-700">
              <span className="font-semibold">Name:</span> {name}
            </Text>

            <Text className="text-lg leading-relaxed text-gray-700">
              <span className="font-semibold">Email:</span> {email}
            </Text>

            <Text className="text-lg leading-relaxed text-gray-700">
              <span className="font-semibold">Phone:</span> {phone}
            </Text>

            <Section className="bg-gray-100 p-4 rounded-xl mt-6">
              <Text className="text-lg font-semibold text-gray-800 mb-1">
                Message
              </Text>
              <Text className="text-gray-700 leading-relaxed whitespace-pre-line">
                {message}
              </Text>
            </Section>
          </Section>

          <Hr className="border-gray-200 my-6" />

          {/* Footer */}
          <Section className="text-center">
            <Text className="text-gray-500 text-sm mb-2">
              This email was automatically generated from your website's contact
              form.
            </Text>
            <Button
              href="mailto:{email}"
              className="bg-blue-600 text-white text-[16px] py-[12px] px-[28px] rounded-xl shadow hover:bg-blue-700"
            >
              Reply to {name}
            </Button>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

ContactSubmissionEmail.PreviewProps = {
  name: "John Doe",
  email: "john@example.com",
  phone: "+1 (555) 987-6543",
  message: "Hello, I'd love to learn more about your services!",
} as ContactSubmissionEmailProps;
