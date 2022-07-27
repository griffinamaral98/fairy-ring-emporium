import React from "react";
import Layout from "../components/Layout";
import { Label, TextInput, Button, Textarea, FileInput } from "flowbite-react";

const Commission = () => {
  return (
    <Layout>
      <section className="page">
        <form
          className="flex flex-col gap-4"
          action="https://formspree.io/f/myyorken"
          method="POST"
          encType="multipart/form-data"
        >
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Your Name" />
            </div>
            <TextInput
              id="name"
              type="text"
              placeholder="Your Name"
              name="name"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your Email" />
            </div>
            <TextInput
              id="email"
              type="email"
              placeholder="name@name.com"
              name="email"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="description" value="Commission Description" />
            </div>
            <Textarea
              id="description"
              placeholder="Brief description of commission"
              name="description"
              required={true}
              rows={4}
            />
          </div>
          <div id="fileUpload">
            <div className="mb-2 block">
              <Label htmlFor="file" value="Reference photo" />
            </div>
            <FileInput
              id="file"
              name="file"
              helperText="Please upload a reference photo if necessary"
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </section>
    </Layout>
  );
};

export default Commission;
