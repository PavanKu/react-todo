import React, { useMemo } from "react";

import { useTodos } from "../Todo";
import Footer from "./Footer";
import {
  StyledClearBtnContainer,
  StyledRemainingContainer,
} from "./Footer.styled";
import { RemainingTask } from "../RemainingTask";
import { Tabs } from "../Tabs";
import { ClearBtn } from "../ClearBtn";

import { TAB_OPTIONS } from "../../constants/appConstants";

function FooterContainer() {
  const tabOptions = [
    TAB_OPTIONS.ALL,
    TAB_OPTIONS.ACTIVE,
    TAB_OPTIONS.COMPLETED,
  ];
  const { getTodos, getActiveTab, removeTodos, filterByStatus } = useTodos();
  const todos = getTodos();
  const activeTab = getActiveTab();

  const showFooter = useMemo(() => !!todos.length, [todos]);
  const remainingTaskCount = useMemo(
    () => todos.filter((todo) => !todo.isCompleted).length,
    [todos]
  );
  const completedTaskIds = useMemo(
    () => todos.filter((todo) => todo.isCompleted).map((todo) => todo.id),
    [todos]
  );
  const shouldShowClearBtn = !!completedTaskIds.length;

  return (
    <Footer show={showFooter}>
      <StyledRemainingContainer>
        <RemainingTask count={remainingTaskCount} />
      </StyledRemainingContainer>
      <Tabs
        handleClick={(value) => filterByStatus(value)}
        options={tabOptions}
        active={activeTab}
      />
      <StyledClearBtnContainer show={!!shouldShowClearBtn}>
        <ClearBtn
          label="Clear Completed"
          handleClear={() => removeTodos(completedTaskIds)}
        />
      </StyledClearBtnContainer>
    </Footer>
  );
}

export default FooterContainer;
