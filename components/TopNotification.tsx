  import Link from "next/link";
  import React from "react";
  import { LINKS, NOTIFICATION } from "./config";

  const showNotification = NOTIFICATION.showNotification;
  const notificationText = NOTIFICATION.notificationText;
  const notificationLink = NOTIFICATION.notificationLink;

  const TopNotification = () => {
    return (
      showNotification && (
        <Link href={notificationLink} target="_blank">
          <div className="text-center text-sm py-2 brand_gradient mb-2 px-4">
            {notificationText}
          </div>
        </Link>
      )
    );
  };

  export default TopNotification;
