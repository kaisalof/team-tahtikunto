import '../styles/kuviastyles.css'
import React from 'react'
import Enni from '../images/enni.jpeg'
import '../styles/App.css'

const Kuvia = () => {
    return (
        <div>
            <h3>Kuvia</h3>
            <img src={Enni} alt="Enni" className="kuvat" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse cursus finibus diam vitae scelerisque. Etiam finibus tristique ante, nec imperdiet dui ullamcorper non. Curabitur convallis cursus sapien vel consequat. Donec id feugiat tellus, eu blandit felis. Nam ultrices, ligula eu rhoncus tincidunt, quam libero hendrerit nisl, eget pellentesque urna mauris ac mauris. Maecenas sem massa, feugiat eget ornare nec, dictum eu lacus. Aenean tempor sed ex in rhoncus.

                Cras tincidunt bibendum mi eget lacinia. Sed id nibh tortor. Ut sem sapien, iaculis ut eros eget, venenatis vestibulum dui. In et lobortis ex. Aliquam consequat quam sem, quis placerat nisl dictum et. Nunc lacinia lectus quis pharetra viverra. Vestibulum pharetra tempus posuere. Quisque et dapibus sem. Praesent eget erat in nibh mattis convallis non eu lacus. Praesent volutpat auctor ligula ut tincidunt. Sed id risus tincidunt, interdum elit nec, maximus lectus. Aenean eu quam rutrum, egestas massa et, hendrerit sem. Cras eu arcu consequat ligula posuere volutpat pellentesque lacinia est. Quisque pellentesque iaculis ultrices. Integer molestie dictum diam in lobortis.</p>
        </div>
    )
}

export default Kuvia
