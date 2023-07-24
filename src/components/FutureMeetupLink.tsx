import React from "react";
import { Link } from "gatsby";
import { CalendarIcon } from "@heroicons/react/24/solid";

type MeetupProps = {
  meetup: Queries.MeetupsPageQuery["upcomingMeetups"]["edges"][0]["node"];
};

export const FutureMeetupLink = ({ meetup }: MeetupProps) => (
  <div className="dark:bg-slate-800 mb-6 rounded-md p-4 border border-san-juan-200 dark:border-san-juan-500">
    <span className="dark:text-emerald-400 inline text-san-juan-400">
      #{meetup?.frontmatter?.meetupNumber} -&nbsp;
    </span>

    <Link
      to={`/meetups/${meetup?.frontmatter?.slug}`}
      className="dark:text-emerald-600 text-san-juan-500 dark:hover:text-emerald-400 hover:text-san-juan-400 dark:visited:text-emerald-500 visited:text-san-juan-600 font-bold"
    >
      {meetup?.frontmatter?.title}
    </Link>
    <div className="flex-1 pb-4">
      <div className="block py-2 text-sm italic text-slate-400">
        <CalendarIcon className={"h-4 w-4 inline"} />{" "}
        {meetup?.frontmatter?.date}
      </div>
      <div className="dark:text-slate-100 text-slate-500">
        {meetup?.frontmatter?.description}
      </div>
    </div>

    <Link
      to={meetup?.frontmatter?.meetupLink || ""}
      className="bg-rose-500 text-white active:bg-rose-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-2 inline-block ease-linear transition-all duration-150"
      type="button"
    >
      RSVP on Meetup.com
    </Link>
  </div>
);
