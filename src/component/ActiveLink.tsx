import { useRouter } from "next/router";
import PropTypes from "prop-types";
import Link from "next/link";
import React, { Children } from "react";

const ActiveLink = (propsparam: any) => {
  const { children, activeClassName, ...props } = propsparam;
  const { asPath } = useRouter();
  const child = Children.only(children);
  const childClassName = child.props.className || "";

  var propMatch = props.validRegexString ? props.validRegexString : "a^";

  // pages/index.js will be matched via props.href
  // pages/about.js will be matched via props.href
  // pages/[slug].js will be matched via props.as
  var regex = new RegExp(propMatch, "i");

  const className =
    asPath === props.href || asPath === props.as || regex.test(asPath)
      ? `${childClassName} ${activeClassName}`.trim()
      : childClassName;

  return (
    // @ts-ignore: Unreachable code error
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  );
};

export default ActiveLink;
