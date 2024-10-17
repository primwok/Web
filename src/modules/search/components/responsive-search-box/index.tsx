"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  ArrowBigLeftIcon,
  ChevronLeft,
  CircleX,
  Link,
  Link2Icon,
  Search,
  X,
} from "lucide-react";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import SearchBoxWrapper, {
  ControlledSearchBoxProps,
} from "../search-box-wrapper";
import { SEARCH_INDEX_NAME, searchClient } from "@/lib/search-client";
import { InstantSearch, useHits, useSearchBox } from "react-instantsearch";
import LocalizedClientLink from "@/modules/common/components/localized-client-link";

export const ResponsiveSearchBox: React.FC<{
  screenSize?: "small" | "large";
}> = (
  { screenSize = "small" } // default to small
) => {
  return (
    <InstantSearch
      indexName={SEARCH_INDEX_NAME}
      searchClient={searchClient.searchClient}
    >
      {screenSize === "small" ? <OverlaySearchBox /> : <InlineSearchBox />}
    </InstantSearch>
  );
};

const ControlledOverlaySearchBox = ({
  inputRef,
  onChange,
  onReset,
  onSubmit,
  placeholder,
  value,
  ...props
}: ControlledSearchBoxProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    event.stopPropagation();

    if (onSubmit) {
      onSubmit(event);
    }

    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  const handleReset = (event: FormEvent) => {
    event.preventDefault();
    event.stopPropagation();

    onReset(event);

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <form action="" noValidate onSubmit={handleSubmit} onReset={handleReset}>
      <div
        className="search-bar bg-white flex gap-2 items-center justify-center border border-gray-500 group rounded-2xl
			px-[1rem] md:w-[40vw] has-[:focus]:border-sky-500 
			has-[:focus]:ring-ring has-[:focus]:ring-sky-400  has-[:focus]:ring-1 h-[2.5rem] mx-auto 
		"
      >
        <Input
          placeholder="What are you looking for?"
          className="border-0 focus-visible:border-none focus-visible:shadow-none focus-visible:outline-none focus-visible:ring-none focus-visible:ring-0 text-sm"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          type="search"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsOpen(true);
          }}
          onChange={onChange}
          ref={inputRef}
          value={value}
        />
        <Separator orientation="vertical" />
        <Button
          variant="default"
          size="sm"
          className="w-[4rem] p-0 rounded-xl"
          type="submit"
        >
          <Search className="w-5 h-5 text-white" />
          <span className="sr-only">Search Button</span>
        </Button>
      </div>
      {isOpen && (
        <OverlayContainer>
          <div className="flex justify-between items-center w-full gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="p-0"
              onClick={(e) => setIsOpen(false)}
            >
              <ChevronLeft />
              <span className="sr-only">Back</span>
            </Button>
            <Input
              placeholder="What are you looking for?"
              className="text-sm"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck={false}
              type="search"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setIsOpen(true);
              }}
              onChange={onChange}
              ref={inputRef}
              value={value}
            />
            <Button
              variant="ghost"
              size="sm"
              className="p-0 rounded-xl"
              type="submit"
            >
              <Search className="w-5 h-5" />
              <span className="sr-only">Search Button</span>
            </Button>
          </div>
          <Hits />
        </OverlayContainer>
      )}
    </form>
  );
};

const InlineContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="inline-container absolute top-[3rem] z-[100] bg-gray-100 w-full px-[2rem] pt-[1rem] pb-[2rem] rounded-lg">
      {children}
    </div>
  );
};

const OverlayContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="overlay-container fixed top-0 left-0 z-[300] bg-gray-100 w-screen
	  h-screen px-[1.5rem] pt-[1rem] pb-[2rem] "
    >
      <div className="flex flex-col gap-[1rem]">{children}</div>
    </div>
  );
};

const OverlaySearchBox: React.FC = () => {
  const router = useRouter();

  return (
    <SearchBoxWrapper>
      {(props) => {
        return (
          <>
            <ControlledOverlaySearchBox {...props} />
          </>
        );
      }}
    </SearchBoxWrapper>
  );
};

const ControlledInlineSearchBox = ({
  inputRef,
  onChange,
  onReset,
  onSubmit,
  placeholder,
  value,
  ...props
}: ControlledSearchBoxProps) => {
  const { query } = useSearchBox();

  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    event.stopPropagation();

    if (onSubmit) {
      onSubmit(event);
    }

    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  const handleReset = (event: FormEvent) => {
    event.preventDefault();
    event.stopPropagation();

    onReset(event);

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <form
      action=""
      noValidate
      onSubmit={handleSubmit}
      onReset={handleReset}
      className="relative"
    >
      <div
        className="search-bar bg-white flex gap-2 items-center justify-center border border-gray-500 group rounded-2xl
			px-[1rem] md:w-[40vw] has-[:focus]:border-sky-500 
			has-[:focus]:ring-ring has-[:focus]:ring-sky-400  has-[:focus]:ring-1 h-[2.5rem] mx-auto 
		"
      >
        <Input
          placeholder="What are you looking for?"
          className="border-0 focus-visible:border-none focus-visible:shadow-none focus-visible:outline-none focus-visible:ring-none focus-visible:ring-0 text-sm"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck={false}
          type="search"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setIsOpen(true);
          }}
          onChange={onChange}
          onBlur={() => setIsOpen(false)}
          ref={inputRef}
          value={value}
        />
        <Separator orientation="vertical" />
        <Button
          variant="default"
          size="sm"
          className="w-[4rem] p-0 rounded-xl"
          type="submit"
        >
          <Search className="w-5 h-5 text-white" />
          <span className="sr-only">Search Button</span>
        </Button>
      </div>
      {isOpen && !!query && (
        <InlineContainer>
          <Hits />
        </InlineContainer>
      )}
    </form>
  );
};

const InlineSearchBox: React.FC = () => {
  return (
    <SearchBoxWrapper>
      {(props) => {
        return (
          <>
            <ControlledInlineSearchBox {...props} />
          </>
        );
      }}
    </SearchBoxWrapper>
  );
};

const Hits = (props: any) => {
  const { query } = useSearchBox();
  const { items } = useHits(props);

  return (
    <div className="search-items flex flex-col gap-2">
      <h2 className="search-results-title text-sm font-medium">
        Searched for: <strong>{query}</strong>
      </h2>
      <Separator />
      {items?.map((hit, key) => (
        <>
          <Hit key={key} hit={hit} />
          <Separator />
        </>
      ))}
    </div>
  );
};

const Hit = ({ hit }: any) => {
  return (
    <LocalizedClientLink
      href={`/products/${hit.handle}`}
      data-testid="search-result"
    >
      <div className="flex items-center justify-between hover:bg-gray-200 p-2 border-box rounded-lg">
        <p className="text-sm text-ui-fg-subtle">{hit.title}</p>
        <Link2Icon />
      </div>
    </LocalizedClientLink>
  );
};
