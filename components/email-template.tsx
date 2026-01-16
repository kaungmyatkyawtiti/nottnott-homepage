import {
  Html,
  Body,
  Container,
  Heading,
  Text,
  Hr,
} from "@react-email/components";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

export function EmailTemplate({
  name,
  email,
  message
}: EmailTemplateProps) {
  return (
    <Html>
      <Body style={{ fontFamily: "Arial, sans-serif" }}>
        <Container>
          <Heading>New Contact Message</Heading>

          <Text><strong>Name:</strong> {name}</Text>
          <Text><strong>Email:</strong> {email}</Text>

          <Hr />

          <Text>{message}</Text>
        </Container>
      </Body>
    </Html>
  );
}
