export default {
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    {
      name: "jobTitle",
      title: "JobTitle",
      type: "string",
    },
    {
      name: "companyImage",
      title: "CompanyImage",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "company",
      title: "Company",
      type: "text",
    },
    {
      name: "dateStarted",
      title: "DateStarted",
      type: "date",
      options: {
        dateFormat: "MM-YYYY",
      },
    },
    {
      name: "dateEnded",
      title: "DateEnded",
      type: "date",
      options: {
        dateFormat: "MM-YYYY",
      },
    },
    {
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [{ type: "reference", to: { type: "social" } }],
    },
    {
      name: "points",
      title: "Points",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};
