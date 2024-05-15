"use client";
import { useEffect } from "react";
import { useTag } from "@/context/tag";
import TagCreate from "@/components/tag/TagCreate";
import TagList from "@/components/tag/TagList";

export default function Tags() {
  // context
  const { fetchTags } = useTag();

  useEffect(() => {
    fetchTags();
  }, []);

  return (
    <div className="container mb-5">
      <div className="row">
        <div className="col">
          <TagCreate />
        </div>
      </div>

      <div className="row mt-5">
        <div className="col">
          <p className="lead mb-4">List of Tags</p>
          <TagList />
        </div>
      </div>
    </div>
  );
}
