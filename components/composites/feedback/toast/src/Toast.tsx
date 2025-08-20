import React, {
  FC,
  useState,
  ReactNode,
  SyntheticEvent,
  useEffect,
} from "react";
import { Section } from "@bennie-ui/section";

import {
  getActionColorAttribute,
  getClassNames,
  getComponentProperties,
} from "@bennie-ui/attribute-utils";
import { ToastProps } from "./toast.types";
import { getToastScale } from "./toast.utils";
import { Icon } from "@bennie-ui/icons";
import { Button } from "@bennie-ui/button";

export const Toast: FC<ToastProps> = (properties) => {
  const { action, dismissable, duration } = properties;
  const [is_visible, set_is_visible] = useState<boolean>(true);

  const className = getClassNames(
    "toast",
    getToastScale(properties),
    getActionColorAttribute(properties),
  );

  const handleDismiss = () => {
    if (properties.dismissable) {
      set_is_visible(false);
      properties.onDismiss && properties.onDismiss()
    }
  }

  useEffect(() => {
    if (dismissable === true && duration && duration > 0) {
      const default_duration = duration * 1000;

      let timeOutId: ReturnType<typeof setTimeout>;
      timeOutId = setTimeout(() => {
        handleDismiss();
      }, default_duration);
      return () => {
        clearTimeout(timeOutId);
      };
    }
  }, [dismissable]);

  return (
    is_visible && (
      <Section

        cursor={properties.dismissable ? "pointer" : "default"}
        rounding={properties.rounded ? { all: "lg" } : undefined}
        flex={{ direction: "row", justifyContent: "between" }}
        {...getComponentProperties({ ...properties, className })}
        onClick={handleDismiss}
      >
        {properties.children}
        {
          dismissable && (
            <Button
              padding={{ all: "0" }}
              onClick={handleDismiss}
            >
              <Icon
                figure="XMarkIcon"
                colors={{
                  text: {
                    color: action && action === "light" ? "black" : "white",
                  },
                }}
              />
            </Button>
          )
        }
      </Section >
    )
  );
};
