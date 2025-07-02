import { S3 } from "aws-sdk";
import PDFDocument from "pdfkit";
import { v4 as uuidv4 } from "uuid";
import { Buffer } from "buffer";

const s3 = new S3();

export const handler = async (event) => {
  try {
    const body = JSON.parse(event.body);
    const { name, skills } = body;

    const doc = new PDFDocument();
    const buffers = [];

    doc.on("data", buffers.push.bind(buffers));
    doc.text(`Name: ${name}`);
    doc.text(`Skills: ${skills.join(", ")}`);
    doc.end();

    await new Promise((resolve) =>
      doc.on("end", resolve)
    );

    const pdfBuffer = Buffer.concat(buffers);
    const key = `resumes/${uuidv4()}.pdf`;

    await s3
      .putObject({
        Bucket: "resume-pdf-generator", // Replace with your bucket name
        Key: key,
        Body: pdfBuffer,
        ContentType: "application/pdf",
      })
      .promise();

    const url = s3.getSignedUrl("getObject", {
      Bucket: "resume-pdf-generator", // Replace here too
      Key: key,
      Expires: 300, // 5 minutes
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ url }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
};

