import {
    GoAAccordion,
    GoABadge,
    GoABlock,
    GoAButton,
    GoAButtonGroup,
    GoACallout,
    GoAChip, GoACircularProgress,
    GoAContainer,
    GoADatePicker,
    GoADetails,
    GoADropdown,
    GoADropdownItem,
    GoAFormItem,
    GoAFormStep,
    GoAFormStepper,
    GoAGrid,
    GoAHeroBanner,
    GoAHeroBannerActions, GoAIcon,
    GoAIconButton,
    GoAInput,
    GoAMicrositeHeader,
    GoAModal,
    GoANotification,
    GoAPages,
    GoAPagination,
    GoAPopover,
    GoARadioGroup,
    GoARadioItem, GoASideMenu, GoASideMenuGroup, GoASideMenuHeading,
    GoATab,
    GoATable, GoATableSortHeader, GoATabs, GoATextarea, GoATooltip
} from '@abgov/react-components'
import { Link } from 'react-router-dom'
import {useEffect, useState} from "react";
import { faker } from "@faker-js/faker";
interface User {
    id: string;
    firstName: string;
    lastName: string;
    age: number;
}


export const HomeRoute = () => {
    const [open, setOpen] = useState<boolean>(false);
    const onClick = () => setOpen(!open);
    const headingContent = (<GoABadge type="success" content="Success" />);

    const [users, setUsers ] = useState([]);

// subset of data shown per page
    const [pageUsers, setPageUsers] = useState([]);

// page number
    const [page, setPage] = useState(1);
    useEffect(() => {
        const _users = []
        for (let i = 0; i < 100; i++) {
            _users.push({
                id: faker.datatype.uuid(),
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                age: faker.datatype.number({min: 18, max: 60}),
            });
        }

        // init data set
        setUsers(_users)

        // save current page
        setPageUsers(_users.slice(0, 10))
    }, [])
    function changePage(newPage) {
        const offset = (newPage - 1) * 10;
        const _users = users.slice(offset, offset + 10)
        setPage(newPage);
        setPageUsers(_users)
    }
    const target = (
        <GoAButton type="secondary" size="compact">
            Click me
        </GoAButton>
    );
    const onChange = () => {}

    function sortData(sortBy: string, sortDir: number) {
        const _users = [...users];
        _users.sort((a: any, b: any) => {
            return (a[sortBy] > b[sortBy] ? 1 : -1) * sortDir;
        });
        setUsers(_users);
    }
  return (
    <main>
      <h1>Design system templates</h1>
      <h3>
        A showcase of the design system components, pages, and other resources for service teams.  
      </h3>

        <GoATooltip content="Tooltip">
            <GoAIcon type="information-circle"></GoAIcon>
        </GoATooltip>

        <GoAFormItem label="Basic">
            <GoATextarea name="item" onChange={onChange} value=""></GoATextarea>
        </GoAFormItem>


        <GoATabs initialTab={2}>
            <GoATab heading="Tab Item 1">
                Tab Item 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </GoATab>
            <GoATab heading="Tab Item 2">
                Tab Item 2: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </GoATab>
            <GoATab heading="Tab Item 3">
                Tab Item 3: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </GoATab>
        </GoATabs>

        <GoATable onSort={sortData}>
            <thead>
            <tr>
                <th>
                    <GoATableSortHeader name="firstName">First name</GoATableSortHeader>
                </th>
                <th>
                    <GoATableSortHeader name="lastName">Last name</GoATableSortHeader>
                </th>
                <th>
                    <GoATableSortHeader name="age" direction="asc">Age</GoATableSortHeader>
                </th>
            </tr>
            </thead>
            <tbody>
            {users.map(user =>
                <tr key={user.firstName}>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.age}</td>
                </tr>
            )}
            </tbody>
        </GoATable>




        <div style={{ maxWidth: "250px" }}>
            <GoASideMenu>
                <GoASideMenuHeading>
                    Nav section 1
                </GoASideMenuHeading>
                <a href="#">Home</a>
                <a href="#">Profile</a>
                <GoASideMenuHeading icon="home">
                    Nav section 2
                </GoASideMenuHeading>
                <a href="#">About</a>
                <a href="#">Contact</a>
                <GoASideMenuHeading>
                    Nav with sub nav
                </GoASideMenuHeading>
                <GoASideMenuGroup heading="Group heading">
                    <a href="#">Foo</a>
                    <a href="#">Bar</a>
                </GoASideMenuGroup>
            </GoASideMenu>
        </div>
        <GoACircularProgress variant="inline" size="large" message="Loading message..." visible={true}></GoACircularProgress>

        <GoAPopover target={target} >
            <p>This is a popover</p>
            It can be used for a number of different contexts.
        </GoAPopover>


        <GoATable width="100%" mb="xl" onSort={sortData}>
            <thead>
            <tr>
                <th><GoATableSortHeader name="firstName">First name</GoATableSortHeader></th>
                <th>Last name</th>
                <th>Age</th>
            </tr>
            </thead>
            <tbody>
            {pageUsers.map((u: User) => (
                <tr key={u.id}>
                    <td>{u.firstName}</td>
                    <td>{u.lastName}</td>
                    <td>{u.age}</td>
                </tr>
            ))}
            </tbody>
        </GoATable>
        <GoAPagination itemCount="10" perPageCount="5"
                       pageNumber={page}
                       onChange={changePage}
        />
        <GoANotification type="information">
            Notification banner message
        </GoANotification>

        <GoAButton onClick={onClick}>
            Show Modal
        </GoAButton>
        <GoAModal open={open} heading="Heading" onClose={onClick}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia obcaecati id molestiae, natus dicta, eaque qui iusto similique, libero explicabo eligendi eius laboriosam! Repellendus ducimus officia asperiores. Eos, eius numquam.
        </GoAModal>




        <GoAMicrositeHeader type="alpha"></GoAMicrositeHeader>
        <ol className="goa-ordered-list">
            <li>
                An ordered item
                <ul>
                    <li>An unordered item</li>
                    <li>
                        A longer item that wraps to a second line
                        <ul>
                            <li>An item on a 3rd level</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                An ordered item
                <ul>
                    <li>
                        An unordered item
                        <ul>
                            <li>An item on a third level</li>
                            <li>
                                A second item on a 3rd level
                                <ul>
                                    <li>An item on a 4th level</li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ol>


        <GoAIconButton variant="color" size="medium" icon="refresh" title="sewde2wf"></GoAIconButton>



        <GoAHeroBanner heading="Heading">
            <GoAHeroBannerActions>
                <GoAButton type="start" onClick={onClick}>
                    Call to action
                </GoAButton>
            </GoAHeroBannerActions>
        </GoAHeroBanner>
        <GoAFormStepper testId="foo" onChange={onChange}>
            <GoAFormStep text="Personal details"></GoAFormStep>
            <GoAFormStep text="Employment history"></GoAFormStep>
            <GoAFormStep text="References"></GoAFormStep>
            <GoAFormStep text="Review"></GoAFormStep>
        </GoAFormStepper>
        <GoAPages current={1} mb="3xl">
            <div>
                Page 1 content
            </div>
            <div>
                Page 2 content
            </div>
            <div>
                Page 3 content
            </div>
            <div>
                Page 4 content
            </div>
        </GoAPages>



        <GoAFormItem label="Basic dropdown" labelSize="regular">
            <GoADropdown name="colors" value="green" filterable={true} onChange={() => {}}>
                <GoADropdownItem value="red" label="Red"></GoADropdownItem>
                <GoADropdownItem value="green" label="Green"></GoADropdownItem>
                <GoADropdownItem value="blue" label="Blue"></GoADropdownItem>
            </GoADropdown>
        </GoAFormItem>
        
        
        
        <GoAFormItem label="Do you pay for childcare?" helpText="Examples of child care include day care, day homes, and baby-sitters.">
            <GoARadioGroup name="pay" onChange={onChange}>
                <GoARadioItem label="Yes" value="yes" name="pay"></GoARadioItem>
                <GoARadioItem label="No" value="no" name="pay"></GoARadioItem>
            </GoARadioGroup>
        </GoAFormItem>
        <GoADetails heading="Why are we asking this question?" mt="l">
            <p>
                This question helps us better understand your situation and ensure that you receive the right information and support.
            </p>
        </GoADetails>







        <GoAFormItem label="Item" requirement="optional" labelSize="regular" error="2we23wd">
            <GoADatePicker
                onChange={() => {}}
                min={new Date(2024,0,1)} max={new Date(2024,0,2)} name="item" value={new Date(2024,0,31)}></GoADatePicker>
        </GoAFormItem>



        <GoAContainer
            type="non-interactive"
            accent="thick"
            heading="Group Heading"
            actions={<GoABadge type="success" content="Badge Text" icon={true} />}
        >
            Content
        </GoAContainer>


        <GoAChip leadingIcon="accessibility" deletable={true} error={true} content="Chip text"></GoAChip>

        <GoACallout type="information" heading="2q2332r23e4fr2e4f" size="medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </GoACallout>



        <GoAButtonGroup alignment="start" gap="relaxed">
            <GoAButton type="primary" onClick={onClick}>
                Button
            </GoAButton>
            <GoAButton type="secondary" onClick={onClick}>
                Button
            </GoAButton>
            <GoAButton type="tertiary" onClick={onClick}>
                Button
            </GoAButton>
        </GoAButtonGroup>



        <GoAFormItem label="Street Address">
            <GoAInput name="address" value="" type="text" onChange={onChange} width="100%"></GoAInput>
        </GoAFormItem>
        <GoAFormItem label="Suite or unit #">
            <GoAInput name="suite" type="text" value="" onChange={onChange} width="100%"></GoAInput>
        </GoAFormItem>
        <GoAFormItem label="City/town">
            <GoAInput name="city" type="text" value="" onChange={onChange} width="100%"></GoAInput>
        </GoAFormItem>
        <GoABlock direction="row">
            <GoAFormItem label="Provice/territory">
                <GoADropdown onChange={onChange} name="province" value="alberta">
                    <GoADropdownItem label="Alberta" value="alberta"></GoADropdownItem>
                    <GoADropdownItem label="BC" value="bc"></GoADropdownItem>
                    <GoADropdownItem label="Manitoba" value="manitoba"></GoADropdownItem>
                    <GoADropdownItem label="New Brunswick" value="new-brunswick"></GoADropdownItem>
                    <GoADropdownItem label="Newfoundland and Labrador" value="newfoundland"></GoADropdownItem>
                    <GoADropdownItem label="Nova Scotia" value="nova-scotia"></GoADropdownItem>
                    <GoADropdownItem label="Ontario" value="ontario"></GoADropdownItem>
                    <GoADropdownItem label="Prince Edward Island" value="prince-edward-island"></GoADropdownItem>
                    <GoADropdownItem label="Quebec" value="quebec"></GoADropdownItem>
                    <GoADropdownItem label="Saskatchewan" value="saskatchewan"></GoADropdownItem>
                </GoADropdown>
            </GoAFormItem>
            <GoAFormItem label="Postal Code">
                <GoAInput value="" name="postalCode" type="text" onChange={onChange} width="100%"></GoAInput>
            </GoAFormItem>
        </GoABlock>
        <GoAButtonGroup alignment="start" mt="l">
            <GoAButton type="primary" onClick={onClick}>
                Submit and continue
            </GoAButton>
            <GoAButton type="secondary" onClick={onClick}>
                Cancel
            </GoAButton>
        </GoAButtonGroup>




        <GoAButton type="tertiary" mb="xl" onClick={onClick}>Toggle Accordion Group</GoAButton>
        <GoAAccordion open={open} heading="Heading">Content 1</GoAAccordion>
        <GoAAccordion open={open} heading="Heading" headingContent={headingContent}>Content 2</GoAAccordion>
        <GoAAccordion open={open} heading="Heading">Content 3</GoAAccordion>


        <GoABadge type="information" icon={true} content="Information"></GoABadge>


      <GoAContainer title="Get Started">
        <p>
          This project is a showcase of the design system at the DDI. Every component used is available for use in your service from Storybook. The equivalent is available for designers within the template library in Figma.
        </p>

        <a target="_blank" href="https://ui-components.alberta.ca">Read the get started guide for more information</a>
      </GoAContainer>

      <GoAGrid gap="m" minChildWidth="400px">
        <GoAContainer>
          <GoABadge type="success" content="New" />
          <h2><Link to="/basic-form">Basic form</Link></h2>
          <p>
            This page contains a basic form made up of a number of inputs, headings, and containers.
          </p>
        </GoAContainer>

        <GoAContainer>
          <GoABadge type="information" content="Coming soon" />
          <h2>Complex tables</h2>
          <p>This page is a showcase of the card component to try out the live component with mock data within a service.</p>
        </GoAContainer>

        <GoAContainer>
          <GoABadge type="information" content="Coming soon" />
          <h2>Form stepper</h2>
          <p>This page is a showcase of the card component to try out the live component with mock data within a service.</p>
        </GoAContainer>

        <GoAContainer>
          <h2>
            <a target="_blank" href="https://github.com/GovAlta/ui-components/issues/new/choose">+ Suggest a template</a>
          </h2>
          <p>Let us know what template you want to see and we will add it here.</p>
        </GoAContainer>
      </GoAGrid>

      <GoAContainer 
        type="info"
        mb="m"
        title={<h2>Design system support</h2> }        
      >
        Get in touch with the design system team on Slack <a href="https://goa-dio.slack.com/archives/C02PLLT9HQ9">#design-system-support</a>
      </GoAContainer>
    </main>
  )
}
