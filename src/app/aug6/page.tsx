import GenericForm from "@/app/ui/donate/donate-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register Aug 6th | Our Family First",
  description:
    "We offer psycho-educational workshops and couples counseling to help Israeli Soldiers reintegrate into family life after experiencing the trauma of war.",
};

export default function Donate() {
  return (
    <main>
      <GenericForm iframeSrc="https://form.jotform.com/242058359747972" bannerTitle="Register Here"/>
    </main>
  );
}
