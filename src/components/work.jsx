import {
  Block,
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Link,
} from "framework7-react";
import { useEffect } from "react";

const Work = () => {
  return (
    <Block className="block">
      <Card outlineMd>
        <CardHeader
          valign="bottom"
          style={{
            backgroundImage:
              "url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg)",
            color: "#fff",
            height: "240px",
          }}
        >
          Journey To Mountains
        </CardHeader>
        <CardContent>
          <p className="date">Posted on January 21, 2015</p>
          <p>
            Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies
            efficitur vitae non felis. Phasellus quis nibh hendrerit...
          </p>
        </CardContent>
        <CardFooter>
          <Link>Read more</Link>
        </CardFooter>
      </Card>

      <Card outlineMd>
        <CardHeader
          valign="bottom"
          style={{
            backgroundImage:
              "url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg)",
            color: "#fff",
            height: "240px",
          }}
        >
          Journey To Mountains
        </CardHeader>
        <CardContent>
          <p className="date">Posted on January 21, 2015</p>
          <p>
            Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies
            efficitur vitae non felis. Phasellus quis nibh hendrerit...
          </p>
        </CardContent>
        <CardFooter>
          <Link>Read more</Link>
        </CardFooter>
      </Card>

      <Card outlineMd>
        <CardHeader
          valign="bottom"
          style={{
            backgroundImage:
              "url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg)",
            color: "#fff",
            height: "240px",
          }}
        >
          Journey To Mountains
        </CardHeader>
        <CardContent>
          <p className="date">Posted on January 21, 2015</p>
          <p>
            Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies
            efficitur vitae non felis. Phasellus quis nibh hendrerit...
          </p>
        </CardContent>
        <CardFooter>
          <Link>Read more</Link>
        </CardFooter>
      </Card>

      <Card outlineMd>
        <CardHeader
          valign="bottom"
          style={{
            backgroundImage:
              "url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg)",
            color: "#fff",
            height: "240px",
          }}
        >
          Journey To Mountains
        </CardHeader>
        <CardContent>
          <p className="date">Posted on January 21, 2015</p>
          <p>
            Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies
            efficitur vitae non felis. Phasellus quis nibh hendrerit...
          </p>
        </CardContent>
        <CardFooter>
          <Link>Read more</Link>
        </CardFooter>
      </Card>

      <Card expandable>
        <CardContent padding={false} style={{ zIndex: 300 }}>
          <div
            style={{
              background:
                "url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg) no-repeat center top",
              height: "240px",
            }}
          >
            <CardHeader textColor="white">Monkeys</CardHeader>
          </div>
          <Link
            cardClose
            color="white"
            className="card-opened-fade-in"
            style={{ position: "absolute", right: "15px", top: "15px" }}
            iconF7="xmark_circle_fill"
          />
          <CardHeader style={{ height: "60px" }}>Beach, Goa</CardHeader>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              cursus rhoncus cursus. Etiam lorem est, consectetur vitae tempor
              a, volutpat eget purus. Duis urna lectus, vehicula at quam id,
              sodales dapibus turpis. Suspendisse potenti. Proin condimentum
              luctus nulla, et rhoncus ante rutrum eu. Maecenas ut tincidunt
              diam. Vestibulum lacinia dui ligula, sit amet pulvinar nisl
              blandit luctus. Vestibulum aliquam ligula nulla, tincidunt rhoncus
              tellus interdum at. Phasellus mollis ipsum at mollis tristique.
              Maecenas sit amet tempus justo. Duis dolor elit, mollis quis
              viverra quis, vehicula eu ante. Integer a molestie risus.
              Vestibulum eu sollicitudin massa, sit amet dictum sem. Aliquam
              nisi tellus, maximus eget placerat in, porta vel lorem. Aenean
              tempus sodales nisl in cursus. Curabitur tincidunt turpis in nisl
              ornare euismod eget at libero.
            </p>
            <p>
              Suspendisse ligula eros, congue in nulla pellentesque, imperdiet
              blandit sapien. Morbi nisi sem, efficitur a rutrum porttitor,
              feugiat vel enim. Fusce eget vehicula odio, et luctus neque. Donec
              mattis a nulla laoreet commodo. Integer eget hendrerit augue, vel
              porta libero. Morbi imperdiet, eros at ultricies rutrum, eros urna
              auctor enim, eget laoreet massa diam vitae lorem. Proin eget urna
              ultrices, semper ligula aliquam, dignissim eros. Donec vitae augue
              eu sapien tristique elementum a nec nulla. Aliquam erat volutpat.
              Curabitur condimentum, metus blandit lobortis fringilla, enim
              mauris venenatis neque, et venenatis lorem urna ut justo. Maecenas
              neque enim, congue ac tempor quis, tincidunt ut mi. Donec
              venenatis ante non consequat molestie. Quisque ut rhoncus ligula.
              Vestibulum sodales maximus justo sit amet ornare. Nullam pulvinar
              eleifend nisi sit amet molestie.
            </p>
            <p>
              <Button fill round large cardClose>
                Close
              </Button>
            </p>
          </div>
        </CardContent>
      </Card>
    </Block>
  );
};

export default Work;
