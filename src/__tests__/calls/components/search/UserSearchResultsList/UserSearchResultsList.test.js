import React from "react";
import UserSearchResultsList from "calls/components/search/UserSearchResultsList/UserSearchResultsList";

describe("UserSearchForm component", () => {
  it("renders without crashing while not searching", () => {
    const selectUser = jest.fn();

    const wrapper = shallow(
      <UserSearchResultsList
        searchResults={["1", "2", "3"]}
        searching={false}
        selectUser={selectUser}
      />
    );

    expect(wrapper.debug()).toContain("UserSearchResult");
  });

  it("renders without crashing while searching", () => {
    const selectUser = jest.fn();
    const getUserProfile = jest.fn();

    const wrapper = shallow(
      <UserSearchResultsList
        searchResults={["1", "2", "3"]}
        searching={true}
        selectUser={selectUser}
        getUserProfile={getUserProfile}
      />
    );

    expect(wrapper.debug()).toContain("Segment");
  });

  it("runs the correct function on click", () => {

    const wrapper = shallow(
      <UserSearchResultsList
        searchResults={["1", "2", "3"]}
        searching={false}
      />
    );

  });
});
