import React from "react";
import { Label, TextInput, Button, Textarea } from "flowbite-react";

import Layout from "../components/Layout";

const Contact = () => {
  return (
    <Layout>
      <section className="page">
        <form className="flex flex-col gap-4" action="" method="POST">
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
              <Label htmlFor="description" value="Comments" />
            </div>
            <Textarea
              id="description"
              placeholder="Brief description of comments"
              name="description"
              required={true}
              rows={4}
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </section>
    </Layout>
  );
};

export default Contact;
