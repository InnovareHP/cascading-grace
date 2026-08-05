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

interface CareerSubmissionEmailProps {
  name: string;
  email: string;
  phone: string;
  position: string;
  message: string;
}

export default function CareerSubmissionEmail({
  name,
  email,
  phone,
  position,
  message,
}: CareerSubmissionEmailProps) {
  const previewText = `New career application from ${name} for ${position}`;

  return (
    <Html>
      <Head />
      <Body className="bg-gray-50 text-gray-900 font-sans">
        <Preview>{previewText}</Preview>

        <Container className="mx-auto py-10 px-6 w-[580px] max-w-full bg-white shadow-lg rounded-2xl">
          {/* Header */}
          <Section className="text-center mb-8">
            <Text className="text-2xl font-bold text-gray-900">
              New Career Application
            </Text>
            <Text className="text-gray-500 text-sm mt-1">
              Someone just applied through the careers form on the website.
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

            <Text className="text-lg leading-relaxed text-gray-700">
              <span className="font-semibold">Position:</span> {position}
            </Text>

            <Section className="bg-gray-100 p-4 rounded-xl mt-6">
              <Text className="text-lg font-semibold text-gray-800 mb-1">
                About the Applicant
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
              This email was automatically generated from your website's careers
              form.
            </Text>
            <Button
              href={`mailto:${email}`}
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

CareerSubmissionEmail.PreviewProps = {
  name: "Jane Doe",
  email: "jane@example.com",
  phone: "+1 (555) 987-6543",
  position: "Caregiver",
  message: "I have 5 years of experience in residential care.",
} as CareerSubmissionEmailProps;
